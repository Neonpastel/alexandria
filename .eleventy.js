const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}