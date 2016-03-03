// prepare for ES6 & ES7 (async/await)
require('babel-core/register')({
    presets: [ 'es2015', 'stage-3' ],
    plugins: [
        "transform-runtime"
    ]
});
require("babel-polyfill");

// load chai and helpers
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');
var chaiThinks = require('chai-things');

// set on global
global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = require('sinon');

// uncomment following line if you want to work with
// chai.should();

// attach all to chai
chai.use(sinonChai);                    // sinon
chai.use(chaiAsPromised);               // promises
chai.use(chaiThinks);                   // array testing
