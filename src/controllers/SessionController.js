const User = require('../models/User');
// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }
        //const user = await User.create({ email });

        return res.json(user);
    },
    async show(req, res) {
       let users = await User.find();
       return res.json(users);
    }
};