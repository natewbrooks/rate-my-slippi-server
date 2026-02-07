const express = require("express")
const router = express.Router();
// Routers
const userRouter = require("./user.route")

// Usage
router.use("/user", userRouter)

module.exports = router