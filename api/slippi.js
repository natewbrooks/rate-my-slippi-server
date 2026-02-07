const { SlippiAPI } = require("slippi-api")

let _instance = null;

const getSlippi = () => {
    if (!_instance) _instance = new SlippiAPI();
    return _instance;
}

module.exports = { getSlippi }