const express = require("express")
const router = express.Router();
const { userController } = require("../controllers")

router.get("/:tag", userController.getSlippiUser)

module.exports = router