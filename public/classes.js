//ES5

function Person5(name, surname, yearOfBirth, occupation){
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;
	this.occupation = occupation;
} 

var Animal5 = function(name, species, yearOfBirth){
	this.name = name;
	this.species = species;
	this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function() {
	return (new Date().getFullYear() - this.yearOfBirth);
};

var amyWinehouse = new Person5("Amy", "Winehouse", 1984, "singer");
var choupette = new Animal5("Choupette", "cat", 2012);
console.log(amyWinehouse);
console.log(choupette);
console.log(amyWinehouse.calculateAge());

//ES6

class Person6 {
	constructor(name, surname, yearOfBirth, occupation){
		this.name = name;
		this.surname = surname;
		this.yearOfBirth = yearOfBirth;
		this.occupation = occupation;
	}

	calculateAge(){
		let currentYear = new Date().getFullYear();
		let age = currentYear - this.yearOfBirth;
		return age;
	}
}

let joniMitchell = new Person6("Joni", "Mitchell", 1944, "singer");
console.log(joniMitchell);
console.log(joniMitchell.calculateAge());