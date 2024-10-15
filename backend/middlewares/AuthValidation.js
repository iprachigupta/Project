const joi = require("joi");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      return res.status(400).json({ message: "Bad Request", error });
    }
    next();
  };
};

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signupSchema = joi.object({
  name: joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required.",
    "string.min": "Name should have at least 3 characters.",
    "string.max": "Name should have at most 50 characters.",
  }),
  email: joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "string.empty": "Email is required.",
  }),
  password: joi.string().min(8).max(100).required().messages({
    "string.pattern.base":
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
    "string.empty": "Password is required.",
  }),
  confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
    "any.only": "Passwords must match.",
    "string.empty": "Confirm password is required.",
  }),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(100).required(),
});

const signupValidation = validateRequest(signupSchema);
const loginValidation = validateRequest(loginSchema);

module.exports = { signupValidation, loginValidation };
