const { Product, User, Category, Image, sequelize } = require('../models')
const { formatSlug } = require("../helpers/formatSlug");
class ControllerProducts {

    static async getAllProduct(req, res, next) {
        try {
            const allProduct = await Product.findAll({
                include: [
                    {
                        model: Image
                    },
                    {
                        model: Category
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['password']
                        }
                    },

                ],
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.status(200).json(allProduct)
        } catch (error) {
            next(error)
        }
    }

    static async createProduct(req, res, next) {
        try {
            const { name, description, mainImg, price, categoryId, authorId, image1, image2, image3 } =
                req.body;
            console.log(req.body, "<<<<<<<<<<<<<<");

            const result = await sequelize.transaction(async (t) => {
                const newProduct = await Product.create(
                    {
                        name,
                        slug: formatSlug(name),
                        description,
                        price,
                        mainImg,
                        categoryId,
                        authorId,
                    },
                    { transaction: t }
                );

                let add = [{ imgUrl: image1 }, { imgUrl: image2 }, { imgUrl: image3 }];
                const imageObj = add.map((el) => {
                    return {
                        imgUrl: el.imgUrl,
                        productId: newProduct.id
                    };
                })

                await Image.bulkCreate(imageObj, { transaction: t });

                return newProduct;
            });

            res.status(201).json({
                data: result,
            });
        } catch (error) {
            next(error)
        }
    }


    static async getDetailProduct(req, res, next) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id, {
                include: [
                    {
                        model: Image
                    },
                    {
                        model: Category
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['password']
                        }
                    },

                ]
            });

            if (!product) {
                throw {
                    name: "Product Not Found",
                };
            }

            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    }

    static async editProduct(req, res, next) {
        try {
            const { id } = req.params;
            const { name, description, price, mainImg, categoryId, authorId } = req.body;

            const product = await Product.findByPk(id);
            if (!product) {
                throw {
                    name: "Product Not Found",
                };
            }

            await Product.update(
                {
                    name,
                    slug: formatSlug(name),
                    description,
                    price,
                    mainImg,
                    categoryId,
                    authorId,
                },
                { where: { id } }
            );

            const updatedProduct = await Product.findByPk(id);

            res.status(201).json({
                message: `Product success to update`,
                data: updatedProduct,
            });
        } catch (err) {
            next(err);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id);

            if (!product) {
                throw {
                    name: "Product Not Found",
                };
            }

            await Product.destroy({ where: { id } });

            res.status(200).json({
                message: `Product success to delete`,
                data: product,
            });
        } catch (err) {
            next(err);
        }
    }




}

module.exports = ControllerProducts