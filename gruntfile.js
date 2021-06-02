module.exports = function (grunt) {
    grunt.initConfig({
        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        // PostCSS - Tailwindcss and Autoprefixer
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('tailwindcss')('./tailwind.config.js'),
                    //require('autoprefixer')() // add vendor prefixes
                ]
            },
            dist: {
                expand: true,
                cwd: 'ui/src/tailwindcss/',
                src: ['**/*.css'],
                dest: 'ui/dist/tailwindcss/',
                ext: '.css'
            }
        },

        // Watch for changes and run Tasks
        watch: {
            postcss: {
                files: 'ui/src/tailwindcss/**/*.css',
                tasks: ['compile-tailwindcss'],
                options: {
                    interrupt: true
                }
            }
        }
    })

    // Load Grunt Plugins
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-postcss')

    // Register Tasks
    grunt.registerTask('compile-tailwindcss', ['postcss'])

    // Resgiter Watcher Tasks
    grunt.registerTask('watch-tailwindcss', ['watch:postcss'])
}