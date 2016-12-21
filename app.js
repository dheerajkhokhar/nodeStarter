var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
  console.log("Somewhere, someone said hello");
});

emtr.on('reply',function(){
  console.log("Hey I am fine!");
});

emtr.on('greet',function(){
  console.log("A greeting occurred!");
});

console.log('Hello');

emtr.emit('greet');

emtr.emit('reply');

emtr.on('reply',function(){
  console.log("Dere?!");
});

emtr.emit('reply');

console.log('Hello');
emtr.emit('reply');