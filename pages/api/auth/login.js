import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModels";
import bcrypt from "bcrypt";
import {
  CreateAccessToken,
  CreateRefreshToken,
} from "../../../utils/genegrateToken";
connectDB();

export default async function handle(req, res) {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
    case "GET":
      await LG(req, res);
      break;
  }
}

const login = async (req, res) => {
  try {
    const { IDVNL, passWord } = req.body;
    const user = await Users.findOne({ IDVNL });
    if (!user) return res.status(400).json({ err: "this user dose not exist" });
    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) return res.status(400).json({ err: "incorrect password." });
    const access_token = CreateAccessToken({ id: user._id });
    const refresh_token = CreateRefreshToken({ id: user._id });
    res.json({
      msg: "Login Success!",
      refresh_token,
      access_token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        IDVNL: user.IDVNL,
        phoneNumber: user.phoneNumber,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
const LG = async (req, res) => {
  try {
    res.json({
      status: "success",
      result: "asdasd",
    });
  } catch (error) {}
};
