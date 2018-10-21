var path = require ('path');

module.exports = {
    entry:'./assets/frontEndLogic.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'bundled')
    },
    node:{
        fs:'empty'
    }
}