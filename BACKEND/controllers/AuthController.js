const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ message: "Invalid email or password" });

    const auth = await bcrypt.compare(password, user.password);
    if (!auth)
      return res.json({ message: "Invalid email or password" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (err) {
    console.error(err);
  }
};
