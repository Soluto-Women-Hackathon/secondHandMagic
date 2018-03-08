const express = require('express');
const app = express();
const logic = require('./logic');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/search/:category', (req, res)  => {
    logic.getProductByCategory(req.params.category, (err, products) => {
        res.json(products);
    })
});

app.post('/select/:productId', (req, res) => {
    logic.selectProduct(req.params.productId, (req, success) => {
        res.send(success);
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));