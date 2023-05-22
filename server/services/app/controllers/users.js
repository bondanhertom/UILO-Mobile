const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class ControllerUser {

    static async register(req, res, next) {
        try {
            console.log(req.body);
            let { username, email, password, phoneNumber, address } = req.body;
            let newUser = await User.create({
                username,
                email,
                password,
                role: "Admin",
                phoneNumber,
                address
            })
            const { password: _, ...userWithoutPassword } = newUser.dataValues;
            res.status(201).json(userWithoutPassword)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email) throw { name: "email_required" }
            if (!password) throw { name: "password_required" }

            const findUser = await User.findOne({
                where: {
                    email,
                }
            })

            if (!findUser) throw { name: "invalid_email/password" }
            const passwordValidated = comparePassword(password, findUser.password)

            if (!passwordValidated) throw { name: "invalid_email/password" }
            const payload = {
                id: findUser.id,
            }

            const access_token = createToken(payload)
            console.log(access_token);

            const response = {
                access_token,
                email: findUser.email
            }

            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = ControllerUser