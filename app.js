var EventEmitter = require('events');
var util = require('util');

function Greetr(){
  this.greeting = "Hello world!"
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(data){
  console.log(this.greeting+': '+data);
  this.emit('greet',data);
}

var greeter1 = new Greetr();

greeter1.on('greet',function(data){
  console.log('someone greeted1!: '+data);
})

greeter1.greet('John');


var greeter2 = new Greetr();

greeter2.on('greet',function(data){
  console.log('someone greeted2!: '+data);
})

greeter2.greet('Jane');