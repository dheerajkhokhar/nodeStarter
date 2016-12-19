var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed hello world";

var greet3b = require('./greet3');
greet3b.greet();


var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = "Changed";

var Greet4b = require('./greet4');
var grtr1 = new Greet4b();
grtr1.greet();

var greet5 = require('./greet5').greet;
greet5();