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



const submitCode = (call, callback) => {
    const code = call.request.code;
    const testCases = call.request.TestCases;
    const results = [];

    if (!code) {
        console.error("Code is undefined or empty");
        callback(null, { results: [] });
        return;
    }

    fs.writeFileSync('code.cpp', code);

    exec('g++ code.cpp -o output', (error, stdout, stderr) => {
        if (error) {
            console.error("Compiler error:", error);
            callback(null, { results: [] });
            return;
        }

        let completed = 0;

        testCases.forEach((testCase, index) => {
            const input = testCase?.input ?? "";
            fs.writeFileSync('input.txt', input);
            exec('./output < input.txt', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Runtime error on test case ${index + 1}:`, error);
                    results.push(false);
                } else{
                    console.log("priting stdoutptu",stdout);
                    console.log(`Output for test case ${index + 1}:`, stdout.trim());
                    results.push(true); 
                }

                completed++;
                if (completed === testCases.length) {
                    callback(null, { results });
                }
            });
        });
    });
};



function getExpectedOutput(index) {
    return 'Expected Output';
}



server.addService(compilerService.service, {
    runCode: runCode,
    submitCode: submitCode
});


server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Compiler service running on port 50051");
    server.start();
});
