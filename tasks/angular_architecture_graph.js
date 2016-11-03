/*
 * grunt-angular-architecture-graph
 * https://github.com/lucalanca/grunt-angular-architecture-graph
 *
 * Copyright (c) 2014 Joao Figueiredo
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

    var Helpers = require("./helpers")(grunt);

    grunt.registerMultiTask("angular_architecture_graph", "Create graphs of your angular projects using angular-architecture-graph.", function() {
        var options = this.options({
            hideAngularServices: true,
            shapeModules: "component",
            shapeFactories: "ellipse",
            shapeDirectives: "cds",
            colorScheme: "paired12"
        });


        var done = this.async();

        Helpers.preprocessTemplates(options);

        this.files.forEach(function(file) {
            // 1. Parse Files
            var parsedFiles = Helpers.parseSrcFiles(file);

            // 2. Get codebase graph using angular-architecture graph
            var codebaseArchitecture = Helpers.analyseFiles(parsedFiles, options);

            //sleep(100)

            setTimeout(function() {
                // 3. Generate .dot files
                Helpers.generateGraphFiles(codebaseArchitecture, file);

                // 4. Generate diagram files
                Helpers.renderDotFiles(file);

           }, 1000);
        });

        setTimeout(done, 2000);
    });
};
