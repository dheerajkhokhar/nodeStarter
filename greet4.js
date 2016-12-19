function Greetr(){
  this.greeting = 'Hello world4!';
  this.greet = function(){
    console.log(this.greeting);
  }
}
// console.log("4");
module.exports = Greetr;