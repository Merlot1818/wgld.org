module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.config('clean.all', [
    'dist'
  ]);

  grunt.config('concat.all', {
    src: [
      
    ],
    dest: 'dist/wgld.js',
    nonull: true,
    options: {
      banner: "'use strict';\n+function (root) {\n",
      footer: "}(this);\n",
      process: function (src, filepath) {
        return '// Source: ' + filepath + '\n' + src;
      }
    }
  });

  grunt.config('uglify.all', {
    src: 'dist/wgld.js',
    dest: 'dist/wgld-min.js'
  });

  grunt.registerTask('default', [
    'clean',
    'concat'
  ]);

  grunt.registerTask('release', [
    'clean',
    'concat',
    'uglify'
  ]);
};
