module.exports = md => {
    const RE = /^<style(?=(\s|>|$))/i;

    md.renderer.rules.html_block = (tokens, idx, options, env) => {
        const content = tokens[idx].content;
        const hoistedTags = env.hoistedTags || (env.hoistedTags = []);

        if (RE.test(content.trim())) {
            hoistedTags.push(content);
            return '';
        }
        return content;
    }
};
