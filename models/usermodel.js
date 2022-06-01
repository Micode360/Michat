const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: [true, "First Name required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name required"],
    },
    email: {
      type: String,
      required: [true, "Email Address required"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password required"],
      minLength: 6,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    confirmPassword: Boolean,
    confirmPasswordToken: String,
  },
  {
    timestamps: true,
  }
);

/*
.pre runs a certain function to the user object before it 
gets saved, deleted update and so on this one is save
*/

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt);
  //this.confirmPassword.token = jwt.sign({token: this.confirmPassword.token}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
  next();
});

UserSchema.methods.compareToMatchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedInToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


UserSchema.methods.getResetPaswwordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");


  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
}



const User = mongoose.model("User", UserSchema);

module.exports = User;
