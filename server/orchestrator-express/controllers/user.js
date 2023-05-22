const axios = require("axios");
const redis = require("../config/connectRedis");
class Controller {
    static async createUser(req, res) {
        try {
            const { data } = await axios.post(`${process.env.BASE_URL_USER}/users`, {
                ...req.body,
            })
            await redis.del("users");
            res.status(200).json(data)
        } catch (error) {
            //console.log(error.response.msg);
            res.status(error.response.status).json({ msg: error.response.data.msg });
        }
    }

    static async findAllUser(req, res) {
        try {
            const chaceData = await redis.get("users");
            if (chaceData) {
                return res.status(200).json(JSON.parse(chaceData));
            }
            const { data } = await axios.get(`${process.env.BASE_URL_USER}/users`)
            await redis.set("users", JSON.stringify(data));
            res.status(200).json(data)

        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.msg });
        }
    }

    static async findUserById(req, res) {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL_USER}/users/${req.params.id}`)
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.msg });
        }
    }
    static async deleteUser(req, res) {
        try {
            const { data } = await axios.delete(`${process.env.BASE_URL_USER}/users/${req.params.id}`)
            await redis.del("users");
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.msg });
        }
    }
}

module.exports = Controller