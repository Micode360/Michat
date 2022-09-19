const router = require("express").Router();
const { getPrivateData, imageAPI } = require("../controllers/private");
const { protect } = require("../middleware/private");

router.get("/",protect, getPrivateData);
router.post("/image", imageAPI);

module.exports = router;
