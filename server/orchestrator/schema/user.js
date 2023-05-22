const axios = require("axios");

const redis = require("../config/connectRedis");

const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type Query {
    findUser: [User]
    user(_id: ID):User
  }

  input NewUser {
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type Mutation {
    addUser( NewUser: NewUser ): User
    deleteUser(_id: ID): User
  }
`;

const resolvers = {
    Query: {
        findUser: async () => {
            try {
                // const chaceData = await redis.get("users");
                // if (chaceData) {
                //     return JSON.parse(chaceData);
                // }
                const { data } = await axios.get(`${process.env.BASE_URL_USER}/users`);
                console.log(data);
                // await redis.set("users", JSON.stringify(data));
                return data;
            } catch (err) {
                throw err;
            }
        },
        user: async (_, args) => {
            try {
                const { _id } = args;
                const { data } = await axios.get(`${process.env.BASE_URL_USER}/users/${_id}`);
                console.log(data);
                return data;
            } catch (err) {
                throw err;
            }
        },
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                const { data } = await axios.post(`${process.env.BASE_URL_USER}/users`, {
                    ...args.NewUser,
                });
                // await redis.del("users");
                console.log(data);
                return data;
            } catch (err) {
                throw err;
            }
        },


        
        deleteUser: async (_, args) => {
            try {
                const { _id } = args;
                const { data } = await axios.delete(
                    `${process.env.BASE_URL_USER}/users/${_id}`
                );
                // await redis.del("users");
                return data.data;
            } catch (err) {
                throw err;
            }
        },
    },
};

module.exports = { typeDefs, resolvers };
