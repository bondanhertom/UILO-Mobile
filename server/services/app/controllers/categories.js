const { Category, Product, User } = require('../models')
class ControllerCategories {

    static async getAllCategory(req, res, next) {
        try {
            const allCategory = await Category.findAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.status(200).json(allCategory)
        } catch (error) {
            next(error)
        }
    }

    static async createCategory(req, res, next) {
        try {
            const { name } = req.body;

            const newCategory = await Category.create({ name });

            res.status(201).json({ data: newCategory });
        } catch (err) {
            next(err);
        }
    }

    static async updateCategory(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            await Category.update({ name }, { where: { id } });

            res.status(201).json({
                message: "Success to update Category",
            });
        } catch (err) {
            next(err);
        }
    }
    static async deleteCategory(req, res, next) {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);

            if (!category) {
                throw {
                    name: "Category Not Found",
                };
            }

            await Category.destroy({
                where: { id },
            });

            res.status(200).json({
                message: "Category success to delete",
                data: category,
            });
        } catch (err) {
            next(err);
        }
    }

    static async detailCategory(req, res, next) {
        try {
            const { id } = req.params;

            const category = await Category.findByPk(id);

            if (!category) {
                throw {
                    name: "Category Not Found",
                };
            }

            res.status(200).json(category );
        } catch (err) {
            next(err);
        }
    }

}

module.exports = ControllerCategories