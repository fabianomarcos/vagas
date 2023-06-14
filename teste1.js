const axios = require('axios');
const { baseURL } = require('./src/utils/constants');

const getUsersByName = async( req, res, next ) => {
    try {
        const { data } = await axios.get(baseURL)
        const { name } = req.query;
        const username = name.toLowerCase()

        const userFound = data.filter(user => user.name.toLowerCase().includes(username))

        if(!userFound) return res.status(400).json({ error: 'User not found' })

        res.status(200).json({ users: userFound });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserByName = async( req, res, next ) => {
    try {
        const { data } = await axios.get(baseURL)
        const { name } = req.query;
        const username = name.toLowerCase()

        const userFound = data.find(user => user.name.toLowerCase() === username)

        if(!userFound) return res.status(400).json({ error: 'No user found' })

        res.status(200).json({ user: userFound });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async ( req, res, next ) => {
    const { data } = await axios.get(baseURL)
    res.status(200).json({ users: data });
};

module.exports = {
    getUserByName,
    getUsersByName,
    getUsers
};