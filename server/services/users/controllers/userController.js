const { User } = require("../models/users");

class ControllerUser {

    static async findAll(req, res, next) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next) {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json( user )

        } catch (error) {
            next(error)
        }
    }

    static async createUser(req, res, next) {
        try {
            const { username, email, password, role, phoneNumber, address } = req.body;
            const newUser = await User.create({
                username,
                email,
                password,
                role,
                phoneNumber,
                address,
            });
            res.status(200).json(newUser);
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const user = await User.findById(req.params.id);

            await User.destroy(req.params.id);

            res.status(200).json({msg:"success deleted", data: user });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = ControllerUser