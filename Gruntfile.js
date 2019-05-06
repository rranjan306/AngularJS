module.exports = function(grunt) {

  //load all grunt plugins from package.json file
  require('load-grunt-tasks')(grunt);

  //register the grunt task
  grunt.registerTask('default', ['clean', 'concat:vendorjs', 'concat:js', 'concat:index', 'concurrent:target']);
  grunt.registerTask('vendor', ['concat:vendorjs'])

  //configure the task
  grunt.initConfig({
    concurrent:{
      target:{
          tasks: ['connect:server', 'watch'],
          options: {
            logConcurrentOutput: true
          }
      }
    },

    clean:{
      public: ['public'],
      sourceFilesInBuild: ['public/js/app.js', 'public/js/vendor.js']
    },
    concat:{
      index:{
        src: ['src/index.html'],
        dest: 'public/index.html'
      },
      js: {
        src: ['src/**/*.js'],
        dest: 'public/js/app.js'
      },
      vendorjs: {
        src: ['node_modules/restangular/src/restangular.js'],
        dest: 'public/js/vendor.js'
      }
    },

    // uglify:{
    //   js: {
    //     files: {
    //       'public/js/app.js': ['src/**/*.js']
    //     }
    //   }
    // },

    connect: {
      server: {
        options: {
          port: 9002,
          base: 'public',
          livereload: true,
          keepalive : true,
          hostname: 'localhost'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['concat:js']
      },
      index: {
        files: ['src/index.html'],
        tasks: ['concat:index']
      }
    }
  });
};