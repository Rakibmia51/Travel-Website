const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "https://placeholder.com", // ডিফল্ট প্রোফাইল পিকচার
    },
    role: {
      type: String,
      default: "user", // ইউজার নাকি অ্যাডমিন তা ডিফাইন করবে
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
