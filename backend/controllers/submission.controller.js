const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { v4: uuidv4 } = require('uuid');

const packageDefinition = protoLoader.loadSync('./compiler.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const compilerService = protoDescriptor.Compiler;

const client = new compilerService('localhost:50051', grpc.credentials.createInsecure());

exports.submission = async (req, res) => {
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
};
