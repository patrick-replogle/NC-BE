function registerFields(req, res, next) {
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.address
  ) {
    res.status(400).json({
      message:
        "Email, password, first name, last name, and address are all required fields",
    });
  } else {
    next();
  }
}

module.exports = {
  registerFields,
};
