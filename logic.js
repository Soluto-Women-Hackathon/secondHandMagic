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
        } else {
            selectProduct.available = false;
            done(null, "Success");
        }
        
    },
    getProductByAge: function (age, done) {
        const resultProducts = products.filter((p) => p.age === age && p.available === true);
        done(null, resultProducts)
    },
    getProductByGender: function (gender, done) {
        const resultProducts = products.filter((p) => p.gender === gender && p.available === true);
        done(null, resultProducts)
    },

    addProduct: function (newProductId, name, category, age, gender, img_path, done) {
        console.log("Adding new product " + name);
        var newProduct = {
            "id": newProductId,
            "name": name,
            "owner_user_id": 1,
            "age": age,
            "gender": gender,
            "image_path":img_path,
            "category": category,
            "available": true,
        }
        products.push(newProduct);
        done(null, "Success");
    }
};
