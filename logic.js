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
    },

    approve: function (product_id, owner_id, reciever_id, done) {
        console.log("approving give-away of product " + product_id + " from " + owner_id+ " to " + reciever_id);
        var selectedProduct = products.find(function(p) {return (p.id === parseInt(product_id)&& p.available == true)});
        var owner = users.find(function (p) {return (p.id === parseInt(owner_id))});
        var reciever = users.find(function (p) {return (p.id === parseInt(reciever_id))});
        if (selectedProduct == null) {
            done(null, "failure");
        } else {
            reciever.points -= selectedProduct.Price;
            reciever.activityPoints += 3;
            owner.points += selectedProduct.Price;
            owner.activityPoints += 5;
            done(null, "success");
        }
    },
};
