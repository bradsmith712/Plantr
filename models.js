const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardner = db.define('gardner', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  },
});

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  planted_on: {
    type: Sequelize.DATE,
  },
});

// Plot & Vegetable (many - many)
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

// Plot & Gardner (1 - 1)
Plot.belongsTo(Gardner, { as: 'gardner' });

// Gardner & Vegetable (1 - 1)
Gardner.belongsTo(Vegetable, { as: 'favoriteVegetable' });

module.exports = { db, Vegetable, Plot, Gardner };
