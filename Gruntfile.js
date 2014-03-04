// Generated on 2014-02-28 using generator-webapp 0.4.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    grunt.loadNpmTasks('assemble');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        livinggroup: {
            // Configurable paths
            assets: 'assets',
            wwwroot: 'wwwroot'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= livinggroup.assets %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= livinggroup.assets %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= livinggroup.assets %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '.tmp/*.html',
                    '<%= livinggroup.assets %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= livinggroup.assets %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            },
            assemble: {
                files: ['<%= livinggroup.assets %>/templates/layouts/*.hbs',
                        '<%= livinggroup.assets %>/templates/pages/*.hbs',
                        '<%= livinggroup.assets %>/templates/partials/*.hbs'],
                tasks: ['assemble:server']
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= livinggroup.assets %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= livinggroup.assets %>'
                    ]
                }
            },
            wwwroot: {
                options: {
                    open: true,
                    base: '<%= livinggroup.wwwroot %>',
                    livereload: false
                }
            }
        },

        assemble: {
            options: {
                flatten: true,
                layout: 'layout.hbs',
                layoutdir: '<%= livinggroup.assets %>/templates/layouts',
                assets: 'wwwroot/images',
                partials: ['<%= livinggroup.assets %>/templates/partials/*.hbs']
            },
            wwwroot: {
                files: {
                    '.tmp': ['<%= livinggroup.assets %>/templates/pages/*.hbs']
                }
            },
            server: {
                files: {
                    '.tmp': ['<%= livinggroup.assets %>/templates/pages/*.hbs']
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            wwwroot: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= livinggroup.wwwroot %>/*',
                        '!<%= livinggroup.wwwroot %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= livinggroup.assets %>/scripts/{,*/}*.js',
                '!<%= livinggroup.assets %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= livinggroup.assets %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= livinggroup.assets %>/images',
                javascriptsDir: '<%= livinggroup.assets %>/scripts',
                fontsDir: '<%= livinggroup.assets %>/styles/fonts',
                importPath: '<%= livinggroup.assets %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            wwwroot: {
                options: {
                    generatedImagesDir: '<%= livinggroup.wwwroot %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            wwwroot: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            assets: {
                html: '<%= livinggroup.assets %>/index.html',
                ignorePath: '<%= livinggroup.assets %>/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            wwwroot: {
                files: {
                    src: [
                        '<%= livinggroup.wwwroot %>/scripts/{,*/}*.js',
                        '<%= livinggroup.wwwroot %>/styles/{,*/}*.css',
                        '<%= livinggroup.wwwroot %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= livinggroup.wwwroot %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        //useminPrepare: {
        //    options: {
        //        dest: '<%= livinggroup.wwwroot %>'
        //    },
        //    html: '<%= livinggroup.assets %>/index.html'
        //},

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= livinggroup.wwwroot %>']
            },
            html: ['<%= livinggroup.wwwroot %>/{,*/}*.html'],
            css: ['<%= livinggroup.wwwroot %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the wwwroot folder
        imagemin: {
            wwwroot: {
                files: [{
                    expand: true,
                    cwd: '<%= livinggroup.assets %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= livinggroup.wwwroot %>/images'
                }]
            }
        },
        svgmin: {
            wwwroot: {
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: '*.html',
                    dest: '<%= livinggroup.wwwroot %>'
                }]
            }
        },
        htmlmin: {
            wwwroot: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: false,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: '{,*/}*.html',
                    dest: '<%= livinggroup.wwwroot %>'
                }]
            }
        },

        concat: {
            generated: {
                files:
                    [ { dest: '.tmp/concat/styles/main.css',
                        src: [ '.tmp/styles/main.css' ] },
                      { dest: '.tmp/concat/scripts/vendor.js',
                        src: [ 'assets/bower_components/jquery/jquery.js' ] },
                      { dest: '.tmp/concat/scripts/plugins.js',
                        src:
                            [ 'assets/bower_components/sass-bootstrap/js/affix.js',
                            'assets/bower_components/sass-bootstrap/js/alert.js',
                            'assets/bower_components/sass-bootstrap/js/dropdown.js',
                            'assets/bower_components/sass-bootstrap/js/tooltip.js',
                            'assets/bower_components/sass-bootstrap/js/modal.js',
                            'assets/bower_components/sass-bootstrap/js/transition.js',
                            'assets/bower_components/sass-bootstrap/js/button.js',
                            'assets/bower_components/sass-bootstrap/js/popover.js',
                            'assets/bower_components/sass-bootstrap/js/carousel.js',
                            'assets/bower_components/sass-bootstrap/js/scrollspy.js',
                            'assets/bower_components/sass-bootstrap/js/collapse.js',
                            'assets/bower_components/sass-bootstrap/js/tab.js' ] },
                      { dest: '.tmp/concat/scripts/main.js',
                        src:
                            [ 'assets/scripts/main.js',
                            'assets/scripts/masonry.min.js']
                      }
                    ]
            }
        },

        uglify: {
            generated: {
                files: [{
                    dest: 'wwwroot/scripts/vendor.js',
                    src: [ '.tmp/concat/scripts/vendor.js' ]
                },
                    { dest: 'wwwroot/scripts/plugins.js',
                    src: [ '.tmp/concat/scripts/plugins.js' ]
                },
                    { dest: 'wwwroot/scripts/main.js',
                    src: [ '.tmp/concat/scripts/main.js' ]}
                ]
            }
        },

        cssmin: {
            generated: {
                files: [{
                    dest: 'wwwroot/styles/main.css',
                    src: [ '.tmp/concat/styles/main.css' ]
                }]
            }
        },


        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     wwwroot: {
        //         files: {
        //             '<%= livinggroup.wwwroot %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css',
        //                 '<%= livinggroup.app %>/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     wwwroot: {
        //         files: {
        //             '<%= livinggroup.wwwroot %>/scripts/scripts.js': [
        //                 '<%= livinggroup.wwwroot %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     wwwroot: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            wwwroot: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= livinggroup.assets %>',
                    dest: '<%= livinggroup.wwwroot %>',
                    src: [
                        '*.{ico,png,txt}',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/' + (this.includeCompass ? 'sass-' : '') + 'bootstrap/' + (this.includeCompass ? 'fonts/' : 'wwwroot/fonts/') +'*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= livinggroup.assets %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },


        // Generates a custom Modernizr build that includes only the tests you
        // reference in your assets
        modernizr: {
            devFile: '<%= livinggroup.assets %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= livinggroup.wwwroot %>/bower_components/modernizr/modernizr.js',
            files: [
                '<%= livinggroup.wwwroot %>/scripts/{,*/}*.js',
                '<%= livinggroup.wwwroot %>/styles/{,*/}*.css',
                '!<%= livinggroup.wwwroot %>/scripts/vendor/*'
            ],
            uglify: true
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass:server',
                'copy:styles',
                'assemble'
            ],
            test: [
                'copy:styles'
            ],
            wwwroot: [
                'compass',
                'copy:styles',
                'assemble',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'wwwroot') {
            return grunt.task.run(['build', 'connect:wwwroot:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test'
        ]);
    });

    grunt.registerTask('build', [
        'clean:wwwroot',
        //'useminPrepare',
        'concurrent:wwwroot',
        'autoprefixer',
        'concat',
        'htmlmin',
        'cssmin',
        'uglify',
        'copy:wwwroot',
        'modernizr',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
