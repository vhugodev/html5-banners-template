module.exports = function(grunt) {

  require('jit-grunt')(grunt); //Carrega automaticamente as dependências
  require('time-grunt')(grunt);

  grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),

	concat: {
		options: {
			banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> - by <%= pkg.author %>*/\n'
		},
		all: {
			files: {
				'js/app-grunt.js': [
					'js/src/vendor/cquence.js',
					'js/src/scripts.js'
				]
			}
		}
	},

	uglify: {
		options: {
			mangle: {
				except: ['jQuery']
			},
			banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> - by <%= pkg.author %>*/\n'
		},
		js: {
			files: {
				'js/app-grunt-min.js' : ['js/app-grunt.js']
			}
		}
	},

	less: {
	  production: {
		options: {
		  compress: true
		},
		files: {
		  "css/style-grunt-min.css": "css/src/styles.less"
		}
	  }
	},

	watch: {
	  options: {
		spawn: false
	  },
	  files: ["css/**/*.less", "js/**/*.js"],
	  tasks: ["default"]
	}

  });

  grunt.registerTask('default', ['concat', 'uglify', 'less']);
  grunt.registerTask('develop', ['concat', 'less']);
  grunt.registerTask('w', ['watch']);

};
