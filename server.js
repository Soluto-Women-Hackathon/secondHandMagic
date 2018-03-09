const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logic = require('./logic');
app.use(express.static("public"));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => {res.sendFile('/home/Lena/workspace/secondHandMagic/scripts/index.html')});


app.get('/search/:category', (req, res)  => {
    logic.getProductByCategory(req.params.category, (err, products) => {
        res.json(products);
    })
});

app.post('/select/:productId', (req, res) => {
    console.log(req.body);
    logic.selectProduct(req.params.productId, req.body.userId, (req, success) => {
        res.send(success);
    })
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));