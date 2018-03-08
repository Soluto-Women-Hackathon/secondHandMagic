const products = require('./db');

module.exports = {
    getProductByCategory: function (category, done) {
         const resultProducts = products.filter((p) => p.category === category);
         done(null, resultProducts);
    }
};
