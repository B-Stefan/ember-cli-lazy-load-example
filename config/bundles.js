/* jshint node: true */

/**
 * Configuration for bundles
 * @returns {*}
 */
module.exports = function(environment) {

    return {


        index: {
            files: [
                "**/templates/index.js",
                "**/controllers/index.js"
            ],

            routes: ["index"]
        },
        cats: {
            files: [
                "**/templates/cats.js",
                "**/controllers/cats.js"
            ],
            dependencies: ["index"],
            routes: ["cats"]
        }
    }

};
