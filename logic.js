const products = [{
    "name": "toy car",
    "user" : {
    "user_name": "bob",
        "uesr_email": "bob@gmail.com"
},
    "age": "12M",
    "gender": null,
    "image_path":"./img001.jpg",
    "category": "toys"
},
    {
    "name": "red dress",
    "user" : {
    "user_name": "bob",
        "uesr_email": "bob@gmail.com"
},
    "age": "12M",
    "gender": "girl",
    "image_path":"./img001.jpg",
        "category": "cloths"
}];

module.exports = {
    getProductByCategory: function (category, done) {
         const resultProducts = products.filter((p) => p.category === category);
         done(null, resultProducts);
    }
};