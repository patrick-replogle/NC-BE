const jwt = require("jsonwebtoken");
require("dotenv");

function signToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: "7d",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = {
  signToken,
};
