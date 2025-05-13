module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Clean build directory
    clean: {
      build: ['dist']
    },

    // Copy files to build directory
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['public/**', '!public/**/*.map'],
            dest: 'dist/'
          },
          {
            expand: true,
            src: ['src/assets/**'],
            dest: 'dist/'
          }
        ]
      }
    },

    // Minify JavaScript
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'dist/js/bundle.min.js'
      }
    },

    // Minify CSS
    cssmin: {
      target: {
        files: {
          'dist/css/styles.min.css': ['src/**/*.css']
        }
      }
    },

    // Minify HTML
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },

    // Watch for changes
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['*.html'],
        tasks: ['htmlmin'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Register tasks
  grunt.registerTask('default', ['clean', 'copy', 'uglify', 'cssmin', 'htmlmin']);
  grunt.registerTask('dev', ['watch']);
}; 