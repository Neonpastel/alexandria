const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function (eleventyConfig) {
    eleventyConfig.setEjsOptions({
        rmWhitespace: true
    });

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    return {
        dir: {
            input: "src",
            output: "docs",
        }
    }
}