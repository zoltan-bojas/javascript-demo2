require('babel-register');

//disable webpack features Mocha doesn't understand
require.extensions['.css'] = function(){};
