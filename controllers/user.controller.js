const { validateTag } = require("../helpers/tag.helpers")
const { characters } = require("slippi-api")

const getSlippiUser = async (req, res) => {
    if (!req.params.tag) res.status(403).json({ error: "Must provide a slippi player tag!" })
    try {
        const tag = validateTag(req.params.tag);
        const slippiUser = await req.slippi.getPlayer(tag);
        const charImgs = await slippiUser.getCharacterImages();
        const userData = {
            ...slippiUser,
            characters: charImgs
        }
        if (!userData) res.status(404).json({ error: "User does not exist!"})
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: "Error getting the user!"})
    }
}

module.exports = { getSlippiUser }