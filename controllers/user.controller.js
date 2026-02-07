const { validateTag } = require("../helpers/tag.helpers")

const getSlippiUser = async (req, res) => {
    if (!req.params.tag) res.status(403).json({ error: "Must provide a slippi player tag!" })
    try {
        const tag = validateTag(req.params.tag);
        const data = await req.slippi.getPlayer(tag);
        res.status(200).json(data);
    } catch (error) {
        res.status(403).json({ error: "Tag must be in the form XXX#000"})
    }
}

module.exports = { getSlippiUser }