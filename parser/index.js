const getMarkdown = require('./markdown');
const defaultWrapHTML = html => `<div class="mdvue">${html}</div>`;

const buildScriptTag = (imports) => {
    let components = imports.map(item => item.match(/import\s(.*)\sfrom/)[1]);
    components = components.map(item => {
        if (item.match(/as\s(.*)\s/)) {
            return item.match(/as\s(.*)\s/)[1];
        }
        return item;
    });

    console.log('\n\nimports    ----->', imports);
    console.log('components ----->', components);

    const script = `<script>
      ${imports.join(`\n`)}

      export default {
        components: {
          ${components.join(',\n')}
        }
      }
    </script>`;

    return script;
};

module.exports = (input, options = {}) => {
    const env = {};
    const html = getMarkdown(options.markdown, options.extend).render(input, env);
    const wrapHTML = options.wrapHTML || defaultWrapHTML;
    const componentScript = buildScriptTag(env.importTags || []);

    const component = `<template>
        ${wrapHTML(html)}
      </template>
      
      ${componentScript ? componentScript : ''}
      ${env.hoistedTags ? env.hoistedTags.join('\n\n') : ''}
    `;

    return component;
};
