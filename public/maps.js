var {driver1} = require('./drivers');
var {driver2} = require('./drivers');
var {driver3} = require('./drivers');
var Driver = require('./driver');

////////////////////////////////////// MAP ES6 /////////////////////////////////////////////
const question = new Map();
question.set('question', "What is the capital of France?");
question.set('A', "Toronto");
question.set('B', "Paris");
question.set('C', "Prague");
question.set('correct', "B");
question.set(true, "Correct answer");
question.set(false, "Wrong answer. Try again");

if(!question.has('D')){
	question.set('D', 'Warsaw');
}

console.log(question.get('question'));
console.log(question.size);
console.log(question);