var products = require('./db');

module.exports = {
    getProductByCategory: function (category, done) {
        console.log("here!");
        const resultProducts = products.filter((p) => p.category === category && p.available === true);
        done(null, resultProducts);
    },
    selectProduct: function (productId, done) {
        console.log("looking for product id " + productId);
        var selectProduct = products.find(function( p ) { 
            return p.id === parseInt(productId);
        } );
        
        console.log(selectProduct);
        if (selectProduct == null) {
            done(null, "failure");    
        }
        selectProduct.available = false;
        done(null, "Success");
    }
};
