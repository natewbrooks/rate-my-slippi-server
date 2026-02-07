const { getSlippi } = require("../api/slippi")

const slippiMiddleware = (req, res, next) => {
    req.slippi = getSlippi();
    next();
} 

module.exports = slippiMiddleware