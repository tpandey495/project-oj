const { exec } = require('child_process');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');
const { Problem } = require('../database/models');
const { createFile } = require('../utils/createFile');
const { sendErrorResponse, sendSuccessResponse } = require('../utils/response');




exports.createProblem = async (req, res) => {
  const { statement, name, difficulty, tags, topics, contest_id } = req.body;
  const { userId } = req;
  try {
    const existingProblem = await Problem.findOne({ where: { name } });
    if (existingProblem) {
      return sendErrorResponse(res, 400, 'A problem with the same name already exists.');
    }
    const newProblem = await Problem.create({
      statement,
      name,
      difficulty,
      tags,
      topics,
      contest_id,
      created_by: userId
    });
    return sendSuccessResponse(res, 201, newProblem);
  } catch (error) {
    return sendErrorResponse(res, 500, error.message);
  }
};

exports.getProblems = async (req, res) => {
  const count = parseInt(req.query.count, 10);
  if (isNaN(count) || count <= 0) {
    return sendErrorResponse(res, 400, 'Invalid count parameter.');
  }

  try {
    const problems = await Problem.findAll({
      limit: count,
    });
    return sendSuccessResponse(res, 200, problems);
  } catch (error) {
    return sendErrorResponse(res, 500, error.message);
  }
};

const execPromise = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ stderr });
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
};


// exports.submission = async (req, res) => {
//   const { code, language, input } = req.body;

//   if (!code || !language || !input) {
//     return sendErrorResponse(res, 400, 'Missing code, language, or input');
//   }

//   try {
//     if (language === 'cpp') {
//       const file = uuidv4();
//       const codeFilePath = await createFile('code', file, '.cpp');
//       const inputFilePath = await createFile('input', file, '.txt');
//       const executableName = await createFile('output', file, '.out');

//       await fs.writeFile(codeFilePath, code);
//       await fs.writeFile(inputFilePath, input);

//       try {
//         await execPromise(`g++ ${codeFilePath} -o ${executableName}`);
//       } catch (compileError) {
//         return sendErrorResponse(res, 500, 'Compilation error: ' + compileError.stderr);
//       }

//       try {
//         const { stdout, stderr } = await execPromise(`${executableName} < ${inputFilePath}`);
//         if (stderr) {
//           return sendErrorResponse(res, 500, 'Runtime error: ' + stderr);
//         }
//         return res.status(200).json({ message: 'Code executed successfully', output: stdout });
//       } catch (runError) {
//         return sendErrorResponse(res, 500, 'Execution error: ' + runError.stderr);
//       }
//     } else {
//       return sendErrorResponse(res, 400, 'Unsupported language');
//     }
//   } catch (error) {
//     return sendErrorResponse(res, 500, 'Server error: ' + error.message);
//   }
// };


