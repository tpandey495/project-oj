const db= require('../database/models');
const Response=require('../utils/response');

exports.signUp = async (req, res) => {
    try {
      let {email, password} = req.body;
      if (!email) return Response.sendErrorResponse(res,400,'Please provide an email address');
      req.body.email = email.toLowerCase();
      let newUser = await db.User.create(req.body);
      return Response.sendSuccessResponse(res, 200,newUser,{ message: 'User account created successfully' });
    } catch (e) {
      return Response.sendErrorResponse(res, 500, e.message);
    }
  };

exports.signIn=async(req,res)=>{
  try{
   const users=db.User.findAll();
   return Response.sendSuccessResponse(res, 200,users,{ message: 'User account created successfully' });
  }
  catch(e){
    return Response.sendErrorResponse(res, 500, e.message);
  }
}