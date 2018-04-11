const router = require("express").Router();
const mongoose = require("../controllers/mongoose");

router.route("/")
.post(mongoose.create);

module.exports = router;