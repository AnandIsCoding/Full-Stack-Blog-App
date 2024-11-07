import validator from "validator";

export const ValidateSignupData = (req) => {
  const { email, password, userName } = req.body;

  if (!userName) {
    return { message: "Username is required", success: false };
  }
  if (!email) {
    return { message: "Email is required", success: false };
  }
  if (!password) {
    return { message: "Password is required", success: false };
  }

  // Check username length
  if (userName.length < 3 || userName.length > 15) {
    return { message: "Username must be at least 3 and less than 15 characters", success: false };
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return { message: "Email is not valid", success: false };
  }

  // Validate password strength
  if (!validator.isStrongPassword(password)) {
    return { message: "Password is not strong enough", success: false };
  }

  // If all validations pass
  return null;
};
