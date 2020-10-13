function loginFields(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: "Email and password fields required" });
  } else {
    next();
  }
}

module.exports = {
  loginFields,
};
