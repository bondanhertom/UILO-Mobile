const axios = require("axios");
const redis = require("../config/connectRedis");

class Controller {
    static async addProduct(req, res) {
        try {
            const { data } = await axios.post(`${process.env.BASE_URL_PRODUCT}/products`, {
                ...req.body,
            })
            await redis.del("products");
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.message });
        }
    }

    static async findAllProduct(req, res) {
        try {
            const chaceData = await redis.get("products");
            if (chaceData) {
                return res.status(200).json(JSON.parse(chaceData));
            }
            const { data } = await axios.get(`${process.env.BASE_URL_PRODUCT}/products`)
            await redis.set("products", JSON.stringify(data));
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.message });
        }
    }

    static async detailProduct(req, res) {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL_PRODUCT}/products/${req.params.id}`)
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.message });
        }
    }

    static async editProduct(req, res) {
        try {
            const { data } = await axios.put(
                `${process.env.BASE_URL_PRODUCT}/products/${req.params.id}`,
                { ...req.body }
            );
            await redis.del("products");
            res.status(200).json(data)

        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { data } = await axios.delete(`${process.env.BASE_URL_PRODUCT}/products/${req.params.id}`)
            await redis.del("products");
            res.status(200).json(data)
        } catch (error) {
            res.status(error.response.status).json({ msg: error.response.data.message });
        }
    }
}

module.exports = Controller