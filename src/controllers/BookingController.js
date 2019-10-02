const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { userId } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        const booking = await Booking.create({
            user: userId,
            spot: spot_id,
            date,
        });
        
        await booking.populate('spot').populate('user').execPopulate();
        
        return res.json(booking);
    }
};