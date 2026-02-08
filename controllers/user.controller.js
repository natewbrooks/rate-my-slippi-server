const { validateTag } = require("../helpers/tag.helpers")
const { characters } = require("slippi-api")

const getSlippiUser = async (req, res) => {
    if (!req.params.tag) res.status(403).json({ error: "Must provide a slippi player tag!" })
    try {
        const tag = validateTag(req.params.tag);
        const slippiUser = await req.slippi.getPlayer(tag);
        const charImgs = slippiUser.getAllCharacters();
        slippiUser.characters = charImgs;
        if (!slippiUser) res.status(404).json({ error: "User does not exist!"})
        res.status(200).json(slippiUser);
    } catch (error) {
        res.status(403).json({ error: "Tag must be in the form XXX#000"})
    }
}

module.exports = { getSlippiUser }