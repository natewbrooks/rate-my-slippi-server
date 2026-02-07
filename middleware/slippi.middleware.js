const { getSlippi } = require("../api/slippi")

const slippiMiddleware = (req, res, next) => {
    console.log("Mount slippi")
    req.slippi = getSlippi();
    next();
} 

module.exports = slippiMiddleware