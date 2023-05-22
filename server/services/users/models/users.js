const { ObjectId } = require("mongodb");
const { hashPassword } = require("../helper/bcrypt");
const { getDb } = require("../config/mongosConection");
const isEmail = require('../helper/formatEmail')

class User {
    static getUser() {
        const db = getDb();
        const users = db.collection("users");
        return users;
    }

    static async findAll() {
        const users = this.getUser()
        return await users.find({}, { projection: { password: 0 } }).toArray();
    }
    static async findById(id) {
        const user = this.getUser()
        const result = await user.findOne({
            _id: new ObjectId(id)
        },{ projection: { password: 0 } });

        if (!result) {
            throw {
                name: "DocumentNotFound",
            };
        }

        return result
    }

    static async create(input) {
        if (!input.username) {
            throw {
                name: "Username Empty",
            };
        }
        if (!input.email) {
            throw {
                name: "Email Empty",
            };
        }
        if (!input.password) {
            throw {
                name: "Password Empty",
            };
        }
        if (input.password.length < 5) {
            throw {
                name: "Invalid Min Password",
            };
        }
        if (isEmail(input.email) == false) {
            throw {
                name: "Invalid Email Format",
            };
        }

        const users = this.getUser();
        const user = await users.findOne({
            email: input.email,
        });

        await users.insertOne({
            ...input,
            password: hashPassword(input.password),
        });
        return user
    }

    static async destroy(id) {
        const users = this.getUser();
        const result = await users.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            throw {
                name: "DocumentNotFound",
            };
        }
        return result

    }

}

module.exports = { User }