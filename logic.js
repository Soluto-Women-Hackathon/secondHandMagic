var products = require('./products');
var users = require('./users')

module.exports = {
    getProductByCategory: function (category, done) {
        console.log("here!");
        const resultProducts = products.filter((p) => p.category === category && p.available === true);
        done(null, resultProducts);
    },
    selectProduct: function (productId, userId, done) {
        console.log("looking for product id " + productId + " for user " + userId);
        var selectProduct = products.find(function( p ) { 
            return (p.id === parseInt(productId) && p.available == true);
        } );
        
        console.log(selectProduct);
        if (selectProduct == null) {
            done(null, "failure");    
        }
        selectProduct.available = false;
        done(null, "Success");
    },

    addProduct: function (category, age, gender, done) {
        console.log("looking for product id " + productId);
        var selectProduct = products.find(function( p ) { 
            return (p.id === parseInt(productId) && p.available == true);
        } );
        
        console.log(selectProduct);
        if (selectProduct == null) {
            done(null, "failure");    
        }
        selectProduct.available = false;
        done(null, "Success");
    }
};
