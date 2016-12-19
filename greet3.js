function Greetr(){
  this.greeting = 'Hello world3!';
  this.greet = function(){
    console.log(this.greeting);
  }
}
//console.log("3");
module.exports = new Greetr();