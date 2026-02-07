const express = require("express")
const router = express.Router();
// Middleware
const { slippiMiddleware } = require("../middleware")
// Routers
const userRouter = require("./user.route")

// Usage
router.use("/user", slippiMiddleware, userRouter)

module.exports = router