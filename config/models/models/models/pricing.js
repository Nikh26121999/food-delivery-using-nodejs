const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Organization = require('./organization');
const Item = require('./item');

const Pricing = sequelize.define('Pricing', {
  base_distance_in_km: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Pricing.belongsTo(Organization, { foreignKey: 'organization_id' });
Pricing.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Pricing;
