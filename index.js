const parser = require('./parser');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};
    return parser(source, options);
};