module.exports = md => {
    const RE = /import(?:["'\s]*([\w*{}\n, ]+)from\s*)?["'\s]*([@\w/_-]+)["'\s]*;?/;

    md.renderer.rules.text = (tokens, idx, options, env) => {
        const content = tokens[idx].content;
        const importTags = env.importTags || (env.importTags = []);

        if (RE.test(content.trim())) {
            importTags.push(content.trim());
            return '';
        }
        return content;
    };
};
