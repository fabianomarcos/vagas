const axios = require('axios')
const { baseURL } = require('./src/utils/constants');
const { AppError } = require('./src/errors/AppError');

module.exports = async function(req, res) {
    try {
        const sub_id = req.user.id
        const { data } = await axios.get(baseURL)
        const { name } =  req.query;
        const username = name.toLowerCase()

        const userWithPermission = data.find(user => user.id === sub_id)
        console.log('userWithPermission: ', userWithPermission);
        if (!userWithPermission) throw new AppError("Unauthorized", 401)


        const userFound = data.find(user => user.name.toLowerCase() === username)

        if(!userFound) return res.status(400).json({ error: 'User not found' })

        const actuallyUser = sub_id === userFound.id
        if(actuallyUser) throw new AppError("You cannot delete your user", 401)

        console.log(`${baseURL}/${userFound.id}`);
        await axios.delete(`${baseURL}/${userFound.id}`)
        res.status(200).json({ message: "User removed successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};