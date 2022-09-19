const router = require("express").Router();
const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/private");


router.get("/",protect, getPrivateData);

module.exports = router;
