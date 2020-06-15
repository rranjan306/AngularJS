module.exports = function(grunt) {

  //load all grunt plugins from package.json file
  require('load-grunt-tasks')(grunt);

  //register the grunt task
  grunt.registerTask('default', ['clean', 'ngtemplates', 'concat', 'compass', 'concurrent:target']);
  grunt.registerTask('vendor', ['concat:vendorjs', 'concat:vendorcss']);

  //configure the task
  grunt.initConfig({
    concurrent: {
      target: {
          tasks: ['connect:server', 'watch'],
          options: {
            logConcurrentOutput: true
          }
      }
    },

    clean: {
      public: ['public'],
      sourceFilesInBuild: ['public/js/app.js', 'public/js/vendor.js', 'public/css/vendor.css']
    },
    ngtemplates: {
      app: {
        cwd: 'src/app',
        src: '**/*.html',
        dest: 'public/js/app.templates.js'
      }
    },
    concat: {
      index: {
        src: ['src/index.html'],
        dest: 'public/index.html'
      },
      js: {
        src: ['src/**/*.js'],
        dest: 'public/js/app.js'
      },
      vendorjs: {
        src: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/angular/angular.min.js',
          'node_modules/lodash/lodash.min.js',
          'node_modules/restangular/src/restangular.js',
          'node_modules/angular-ui-router/release/angular-ui-router.min.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'public/js/vendor.js'
      },
      vendorcss: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'public/css/vendor.css'
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src/styles',
          cssDir: 'public/css',
          environment: 'production'
        }
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