const router = require("express").Router();
const { SignUp, SignIn, confirmAccount, forgotPassword, resetPassword } = require("../controllers/auth");


router.post("/signup", SignUp);
router.post("/confirm/account/:confirmationToken", confirmAccount);
router.post("/signin", SignIn);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword/:resetToken", resetPassword);

module.exports = router;
