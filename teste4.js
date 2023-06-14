const axios = require('axios');
const { baseURL } = require('./src/utils/constants');
const { AppError } = require('./src/errors/AppError');

module.exports =  async function(req, res) {
    console.log('request.user: ', req.user);
    try {
        const sub_id = req.user.id
        const { data } = await axios.get(baseURL)
        const { id } =  req.query;
        const { name, job } =  req.body;

        const userWithPermission = data.find(user => user.id === sub_id)
        console.log('userWithPermission: ', userWithPermission);
        if (!userWithPermission) throw new AppError("Unauthorized", 401)

        if(!name && !job)
            return res.status(400).json({
                error: 'It is necessary to send the name or the job'
            })

        const userIndex = data.findIndex(user => user.id == id);
        const oldUser = data[userIndex]
        console.log(data[userIndex])

        if(userIndex == -1) return res.status(400).json({ error: 'User not found' })

        const userUpdated = { name: name || oldUser.name, job: job || oldUser.job }

        await axios.put(`${baseURL}/${id}`, userUpdated)

        res.send({...data[userIndex], ...userUpdated});
    } catch (error) {
        console.log('error: ', error.message);
        res.status(400).json({ error: error.message });
    }
};