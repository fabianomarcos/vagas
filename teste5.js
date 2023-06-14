const axios = require('axios');
const { baseURL } = require('./src/utils/constants');
const { AppError } = require('./src/errors/AppError');

module.exports = async function(req, res){
    try {
        const { name } =  req.body;

        if(!name) throw AppError('It is necessary to send the name', 400)

        const username = name.toLowerCase()

        const { data } = await axios.get(baseURL)

        const usersFounded = data.filter(user => user.name.toLowerCase().includes(username))

        if(usersFounded.length == 0) return res.status(400).json({ error: 'No user found' })

        const message = usersFounded.length > 1 ? "vezes" : "vez"
        res.status(200).json({
            message: `Usuário ${name} foi lido ${usersFounded.length} ${message}.`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};