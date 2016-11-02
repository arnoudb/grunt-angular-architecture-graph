module.exports = {
    files: [
        "src/*.js",
        "!test-mocks/*.js",
        "index.js",
        "grunt/*.js",
        "tasks/*.js",
        "test/*.js",
        "Gruntfile.js"
    ],
    options: {
        config: ".eslintrc"
    }
};
