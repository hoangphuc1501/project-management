const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const routeClient = require("./routes/client/index.route")

app.use(express.static('public')) // tìm thư mục tên là views
app.set('views', './views') // templet engine sử dụng pug
app.set('view engine', 'pug') // thiết lập thư mục chứ file tĩnh

routeClient.routeClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});