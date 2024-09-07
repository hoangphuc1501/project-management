const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public')) // tìm thư mục tên là views
app.set('views', './views') // templet engine sử dụng pug
app.set('view engine', 'pug') // thiết lập thư mục chứ file tĩnh

app.get('/', (req, res) => {
    res.render('client/pages/home/index.pug')
})

app.get("/products", (req, res) => {
    res.render('client/pages/products/index.pug')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});