
const crypto = require("crypto");
const Error = require("../utils/error");
const mailer = require("../utils/mailer");
const uuid = require("uuid");

exports.SignUp = async (req, res, next) => {
    return res.status(200).json({ message: "Await logic via microservice" });
};

exports.confirmAccount = async (req, res, next) => {
  return res.status(200).json({ message: "Await logic via microservice" });
};

exports.SignIn = async (req, res, next) => {

  return res.status(200).json({ message: "Await logic via microservice" });
};


exports.forgotPassword = async (req, res, next) => {
  return res.status(200).json({ message: "Await logic via microservice" });

}

exports.resetPassword = async (req, res, next) => {
  return res.status(200).json({ message: "Await logic via microservice" });
}


