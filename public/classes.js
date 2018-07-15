//ES5

function Person5(name, surname, yearOfBirth){
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;
} 

var Animal5 = function(name, species, yearOfBirth){
	this.name = name;
	this.species = species;
	this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function() {
	return (new Date().getFullYear() - this.yearOfBirth);
};

var amyWinehouse = new Person5("Amy", "Winehouse", 1984);
var choupette = new Animal5("Choupette", "cat", 2012);
console.log(amyWinehouse);
console.log(choupette);
console.log(amyWinehouse.calculateAge());

//INHERITANCE

function Singer5(name, surname, yearOfBirth, numberOfReleasedAlbums, numberOfGrammyAwards){
	Person5.call(this, name, surname, yearOfBirth);
	this.numberOfReleasedAlbums = numberOfReleasedAlbums;
	this.numberOfGrammyAwards = numberOfGrammyAwards;
}

Singer5.prototype = Object.create(Person5.prototype);

var singerAmyWinehouse = new Singer5("Amy", "Winehouse", 1984, 3, 3);
console.log(singerAmyWinehouse);
console.log(singerAmyWinehouse.calculateAge());

Singer5.prototype.wonAGrammyAward = function(){
	this.numberOfGrammyAwards += 1;
}

singerAmyWinehouse.wonAGrammyAward();
singerAmyWinehouse.wonAGrammyAward();
singerAmyWinehouse.wonAGrammyAward();

console.log(singerAmyWinehouse);

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

	static greeting(){
		console.log("Hi there");
	}
}

let joniMitchell = new Person6("Joni", "Mitchell", 1944, "singer");
console.log(joniMitchell);
console.log(joniMitchell.calculateAge());
console.log(Person6.greeting());