const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { exec } = require('child_process');
const fs = require('fs');
const PROTO_PATH = './compiler.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const compilerProto = grpc.loadPackageDefinition(packageDefinition).Compiler;


const runCode = (call, callback) => {
  const code = call.request.code;
  const input = call.request.input;
  fs.writeFileSync('code.cpp', code);
  fs.writeFileSync('input.txt', input);
  exec('g++ code.cpp -o output && ./output < input.txt', (error, stdout, stderr) => {
    if (error) {
      callback(null, { output: '', error: stderr });
    } else {
      callback(null, { output: stdout, error: '' });
    }
  });
};


const submitCode = (call, callback) => {
  const code = call.request.code;
  const testCases = call.request.testCases;
  const results = [];
  fs.writeFileSync('code.cpp', code);
  exec('g++ code.cpp -o output', (error, stdout, stderr) => {
    if (error) {
      callback(null, { results: [] });
      return;
    }
    testCases.forEach((testCase, index) => {
      fs.writeFileSync('input.txt', testCase);
      exec('./output < input.txt', (error, stdout, stderr) => {
        if (error) {
          results.push(false);
        } else {
          const expectedOutput = getExpectedOutput(index); 
          results.push(stdout.trim() === expectedOutput.trim());
        }
        if (index === testCases.length - 1) {
          callback(null, { results });
        }
      });
    });
  });
};


const startServer = () => {
  const server = new grpc.Server();
  server.addService(compilerProto.Compiler.service, { run: runCode, submit: submitCode });
  server.bind('http://127.0.0.1:50051', grpc.ServerCredentials.createInsecure(),(error, port) => {
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  });
};



function getExpectedOutput(index) {
  return 'Expected Output';
}

startServer();
