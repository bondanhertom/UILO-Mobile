const axios = require("axios");

const redis = require("../config/connectRedis");

const typeDefs = `#graphql
  type Product {
    id: ID
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    authorId: String
    categoryId: Int
    Images: [Image]
  }

  type Image {
    id: ID
    productId: Int
    imgUrl: String
  }

  type Query {
    products: [Product]
    product(id: ID!):Product
  }

  input InputProduct {
    name: String
    description: String
    price: Int
    mainImg: String
    authorId: Int
    categoryId: Int
    image1: String
    image2: String
    image3: String
  }

  type Mutation {
    addProduct( InputProduct: InputProduct ): Product
    editProduct(id: ID, InputProduct: InputProduct ): Product
    deleteProduct(id: ID): Product
  }
`;

const resolvers = {
    Query: {
        products: async () => {
            try {
                const chaceData = await redis.get("products");
                if (chaceData) {
                    return JSON.parse(chaceData);
                }
                const { data } = await axios.get(`${process.env.BASE_URL_PRODUCT}/products`);
                await redis.set("products", JSON.stringify(data));
                return data;
            } catch (err) {
                throw err;
            }
        },
        product: async (_, args) => {
            try {
                const { id } = args;
                const { data } = await axios.get(
                    `${process.env.BASE_URL_PRODUCT}/products/${id}`
                );
                return data
            } catch (err) {
                throw err;
            }
        },
    },
    Mutation: {
        addProduct: async (_, args) => {
            try {
                const { data } = await axios.post(`${process.env.BASE_URL_PRODUCT}/products`, {
                    ...args.InputProduct,
                });
                await redis.del("products");
                return data.data;
            } catch (err) {
                throw err;
            }
        },
        editProduct: async (_, args) => {
            try {
                const { id } = args;
                const { data } = await axios.put(
                    `${process.env.BASE_URL_PRODUCT}/products/${id}`,
                    {
                        ...args.InputProduct,
                    }
                );
                await redis.del("products");
                return data.data;
            } catch (err) {
                throw err;
            }
        },
        deleteProduct: async (_, args) => {
            try {
                const { id } = args;
                const { data } = await axios.delete(
                    `${process.env.BASE_URL_PRODUCT}/products/${id}`
                );
                await redis.del("products");
                return data.data;
            } catch (err) {
                throw err;
            }
        },
    },
};

module.exports = { typeDefs, resolvers };
