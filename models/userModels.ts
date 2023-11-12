import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    IDVNL: {
      type: String,
      required: true,
      unique: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      unique: false,
      index: true,
    },
  },
  { timestamps: true }
);
const Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
