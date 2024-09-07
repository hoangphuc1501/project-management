const express = require("express");
const app = express();
const port = 3000;

const routeClient = require("./routes/client/index.route")

app.use(express.static('public')) // tìm thư mục tên là views
app.set('views', './views') // templet engine sử dụng pug
app.set('view engine', 'pug') // thiết lập thư mục chứ file tĩnh

routeClient.routeClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});