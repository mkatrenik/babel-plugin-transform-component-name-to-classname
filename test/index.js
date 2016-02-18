var fs = require('fs');
var babel = require('babel-core');
var plugin =  require('../src/index.js');

// var f = __dirname + '/fixtures/button.js';
var f = __dirname + '/fixtures/class.js';

var output = babel.transformFileSync(f, {
    plugins: [[plugin, { position: 'before' }]]
});

// var expectedOutput = fs.readFileSync(__dirname + '/fixtures/SimpleClass.es5.js').toString().trim();

console.log(output.code);
// expect(output.code).to.equal(expectedOutput);