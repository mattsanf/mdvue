const Markdown = require('saber-markdown'); // A fork of markdown-it

module.exports = (options, extend) => {
    const md = new Markdown(Object.assign({}, options, {
        html: true
    }));

    md.use(require('./extract-imports-plugin'));
    md.use(require('./extract-styles-plugin'));

    if (typeof extend === 'function') {
        extend(md)
    }

    return md
};
