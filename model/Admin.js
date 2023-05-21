const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema({
  user: {
    type: String,
    default: "ADMIN",
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(" pre function of hashing");
    this.password = await bcrypt.hash(this.password, 12);
    console.log(`password : ${this.password}`);
  }
  next();
});

// we are generating token
adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
