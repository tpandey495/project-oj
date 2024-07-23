const { Problem } = require('../database/models');
const {sendErrorResponse,sendSuccessResponse}=require('../utils/response');

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