exports.sendSuccessResponse = (res, statusCode, data, meta = null) => {
    const response = {
      status: true,
      content: {
        data: data
      }
    };
    if (meta) {
      response.content.meta = meta;
    }
    res.status(statusCode).json(response);
  };
  


exports.sendErrorResponse = (res, statusCode, message) => {
    const response = {
      status: false,
      errors: [
        {
          param: 'general',
          message: message,
          code: statusCode
        }
      ]
    };
    res.status(statusCode).json(response);
  };
  


 
