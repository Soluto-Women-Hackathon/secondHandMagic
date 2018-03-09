const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logic = require('./logic');
var productsCount = 2;
app.use(express.static("public"));

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => {res.sendFile('/home/Lena/workspace/secondHandMagic/scripts/index.html')});


/*app.get('/search/:category', (req, res)  => {
    logic.getProductByCategory(req.params.category, (err, products) => {
    res.json(products);
})
});*/

app.get('/search/:type/:value', (req, res)  => {
    logic.getProduct(req.params.type, req.params.value, (err, products) => {
    res.json(products);
})
});
/*app.get('/search/:type/:value', (req, res)  => {
    logic.getProduct(req.params.type, req.params.value, (err, products)) => {
    res.json(products);
    })
    /*console.log("hi");
    if (req.params.type === "category") {
    logic.getProductByCategory(req.params.value, err, products) => {
        res.json(products);
})
} else if (req.params.type === "age") {
    logic.getProductByAge(req.params.value, err, products) => {
        res.json(products);
})
}else if (req.params.type === "gender") {
    logic.getProductByGender(req.params.value, err, products) => {
        res.json(products);
})
}*/
/*});*/


app.post('/select/:productId', (req, res) => {
    console.log(req.body);
    logic.selectProduct(req.params.productId, req.body.userId, (req, success) => {
        res.send(success);
    })
});

app.post('/add', (req, res) => {
    productsCount+=1;
    console.log(req.body);
    logic.addProduct(productsCount, req.body.name, 
        req.body.category, req.body.age, 
        req.body.gender, req.body.img_path, (req, success) => {
        res.send(success);
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));