import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModels";
import bcrypt from "bcrypt";
import valid from "../../../utils/validForm";
connectDB();

export default async function handle(req, res) {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
}

const register = async (req, res) => {
  try {
    const { fullName, IDVNL, passWord, cfPassWord, phoneNumber, email } =
      req.body;
    const errMess = valid(
      fullName,
      IDVNL,
      passWord,
      cfPassWord,
      phoneNumber,
      email
    );
    if (errMess) return res.status(400).json({ err: errMess });
    const passWordHash = await bcrypt.hash(passWord, 12);
    const newUser = new Users({
      fullName,
      IDVNL,
      passWord: passWordHash,
      cfPassWord,
      phoneNumber,
      email,
    });
    await newUser.create;
    res.json({ msg: "Register success" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
