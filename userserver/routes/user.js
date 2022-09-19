const router = require("express").Router();
const { User } = require("../controllers/user");


router.get("/user", User);


module.exports = router;
