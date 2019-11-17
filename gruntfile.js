module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: "jekyll serve --baseurl ''"
            }
        },
        compass: {                  // Task
          dist: {                   // Target
            options: {              // Target options
              sassDir: '_sass',
              cssDir: 'css',
              environment: 'production'
            }
          },
          dev: {
            options: {
              sassDir: '_sass',
              cssDir: 'css'
            }
          }
        },
        watch: {
          site: {
              files: [
                  'index.html',
                  'about/*.html',
                  'portfolio/**/*.html',
                  '_sass/**.*',
                  '!_site/**.*'
              ],
              tasks: ['shell:jekyllBuild'],
            },
            css: {
                files: '_sass/*.scss',
                tasks: ['compass:dev', 'shell:jekyllBuild']
            },
            options: {
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', [
      'watch'
    ]);

    grunt.registerTask('serve', [
      'shell:jekyllServe'
    ]);
};