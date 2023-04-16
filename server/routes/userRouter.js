const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");

const User = require("../models/userModels.js");
const Token = require("../models/tokenModel.js");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, userName, password, confirmPassword } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ message: "bu emaile sahip bir kullanıcı mevcyt" });
    }
    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Sifreler eşleşmiyor" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      userName,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.ACESS_TOKEN_SECRET,
      {
        expiresIn: "3m",
      }
    );
    const refreshToken = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.REFRESH_TOKEN
    );

    await Token.create({
      userId: user._id,
      refreshToken: refreshToken,
    });

    res.status(200).json({ user, accessToken });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
