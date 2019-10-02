const Spot = require('../models/Spot');
// index, show, store, update, destroy

module.exports = {
    async show(req, res) {
        const { userId } = req.headers;
        const spots = await Spot.find({ user: userId });

        return res.json(spots);
    },

};