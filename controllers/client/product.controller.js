module.exports.index = (req, res) => {
    res.render('client/pages/products/index.pug', {
        pageTitle: "trang danh sách sản phẩm"
    })
}

// module.exports.create = (req, res) => {
//     res.render('client/pages/products/index.pug')
// }

// module.exports.edit = (req, res) => {
//     res.render('client/pages/products/index.pug')
// }

// module.exports.delete = (req, res) => {
//     res.render('client/pages/products/index.pug')
// }