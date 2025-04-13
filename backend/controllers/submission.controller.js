const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { v4: uuidv4 } = require('uuid');
const { TestCase } = require('../database/models');

const packageDefinition = protoLoader.loadSync('./proto/compiler.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const compilerService = protoDescriptor.Compiler;

const client = new compilerService('compiler-service:50051', grpc.credentials.createInsecure());

exports.run = async (req, res) => {
  try {
    const { code, language, input } = req.body;
    if (!code || !language || !input) {
      return res.status(400).json({ error: 'Missing code, language, or input' });
    }
    if (language === 'cpp') {
      const file = uuidv4();
      const grpcRequest = {
        code: code,
        input: input
      };
      client.runCode(grpcRequest, (error, response) => {
        if (error) {
          return res.status(500).json({ error: 'gRPC error: ' + error.message });
        }
        if (response.error) {
          return res.status(500).json({ error: 'Compilation/Execution error: ' + response.error });
        }
        return res.status(200).json({ message: 'Code executed successfully', output: response.output });
      });
    } else {
      return res.status(400).json({ error: 'Unsupported language' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected server error: ' + err.message });
  }
};




exports.submit = async (req, res) => {
  try {
    const { code, language, problemid } = req.body;

    // Fetch all test cases for the problem
    const testCases = await TestCase.findAll({
      where: { problemId: problemid },
      raw: true
    });
      
    if (!testCases || testCases.length === 0) {
      return res.status(404).json({ error: 'No test cases found for the given problem ID.' });
    }

    
    if (language === 'cpp') {
      const grpcRequest = {
        code: code,
        TestCases: testCases 
      };

      client.submitCode(grpcRequest, (error, response) => {
        if (error) {
          console.error("gRPC error:", error);
          return res.status(500).json({ error: 'gRPC error: ' + error.message });
        }

        return res.json({
          results: response.results
        });
      });
    } else {
      return res.status(400).json({ error: 'Unsupported language' });
    }

  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error: ' + err.message });
  }
};
