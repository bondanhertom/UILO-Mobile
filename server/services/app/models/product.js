
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      this.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      this.hasMany(models.Image, {
        foreignKey: "productId",
      });
    }
  }
  Product.init({

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product name can not be null"
        },
        notEmpty: {
          msg: "Product name can not be empty"
        },
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Product slug can not be null'
        },
        notEmpty: {
          msg: 'Product slug can not be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description product can not be null"
        },
        notEmpty: {
          msg: "Description product can not be empty"
        },
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price product can not be null"
        },
        notEmpty: {
          msg: "Price product can not be empty"
        },
        min: { args: [500000], msg: "Price product must be at least Rp.500,000,00" }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Main imgae can not be null"
        },
        notEmpty: {
          msg: "Main imgae can not be empty"
        },
      }

    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};