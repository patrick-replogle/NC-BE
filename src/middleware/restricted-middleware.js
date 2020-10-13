const jwt = require("jsonwebtoken");
require("dotenv");

module.exports = (token) => {
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        return {
          success: false,
          error: "Token is not valid",
        };
      } else {
        return { success: true };
      }
    });
  } else {
    return { success: false, error: err.message };
  }
};
