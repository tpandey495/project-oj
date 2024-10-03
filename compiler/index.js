const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { exec } = require('child_process');
const fs = require('fs');

// Load the gRPC proto file
const packageDefinition = protoLoader.loadSync('./compiler.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const compilerService = protoDescriptor.Compiler;

const server = new grpc.Server();


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

// Define the submitCode RPC method
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


function getExpectedOutput(index) {
    return 'Expected Output';
}

console.log(compilerService);

server.addService(compilerService.service, {
    runCode: runCode,
    submitCode: submitCode
});


server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Compiler service running on port 50051");
    server.start();
});
