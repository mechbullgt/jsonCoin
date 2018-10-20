var path = require ('path');

module.exports = {
    entry:'./assets/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'bundled')
    }
}