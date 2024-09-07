const homeRoute = require("./product.route")
const productRoute = require("./product.route")

module.exports.routeClient = (app) => {
    app.get('/', homeRoute);

    app.use("/products", productRoute);
}