const axios = require('axios');
const { baseURL } = require('./src/utils/constants');
const { AppError } = require("./src/errors/AppError");

module.exports = async function(req, res){
    try {
        const { name, job } =  req.body;

        if(!name || !job) throw new AppError("It is necessary to send the name and the job")

        const newUser = { name, job }

        await axios.post(baseURL, newUser)
        res.status(201).json({ user: newUser });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};