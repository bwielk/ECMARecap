(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

//INHERITANCE ES5

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

//INHERITANCE ES6

class Singer6 extends Person6 {

	constructor(name, surname, yearOfBirth, numberOfGrammyAwards, numberOfReleasedAlbums){
		super(name, surname, yearOfBirth);
		this.numberOfGrammyAwards = numberOfGrammyAwards;
		this.numberOfReleasedAlbums = numberOfReleasedAlbums;
	}

	releasedAnAlbum(){
		this.numberOfReleasedAlbums += 1;
		console.log(`${this.name} ${this.surname} has just released an album`);
	}
}

let singerJoniMitchell = new Singer6("Joni", "Mitchell", 1944, 5, 14);
singerJoniMitchell.releasedAnAlbum();
singerJoniMitchell.releasedAnAlbum();

console.log(singerJoniMitchell);

},{}],2:[function(require,module,exports){
function Driver(name, surname, placeOfBirth){
	name === undefined ? name = "UNKNOWN" : name = name;
	surname === undefined ? surname = "UNKNOWN" : surname = surname;
	placeOfBirth === undefined ? placeOfBirth = "UNKNOWN" : placeOfBirth = placeOfBirth;
	this.name = name;
	this.surname = surname;
	this.placeOfBirth = placeOfBirth;
}

Driver.prototype.ownedCarsES5 = function(cars){
	var arr = cars.map(function(el){
		console.log(this.name + " owns " + el);
	}.bind(this))
}

Driver.prototype.ownedCarsES6 = function(cars){
	var arr = cars.map(el => console.log(`${this.name} ${this.surname} posseses ${el}`));
}

module.exports = Driver;
},{}],3:[function(require,module,exports){
var Driver = require('./driver');

var driver1 = new Driver("John", "Smith", "Rochester");
	driver1.drivingLicense = false;
	driver1.drivingLicensePassed = null;
	driver1.yearOfBirth = 1986;

var driver2 = new Driver("Sarah", "MacFleetwood", "Manchester");
	driver2.drivingLicense = false;
	driver2.drivingLicensePassed = null;
	driver2.yearOfBirth = 1992;

var driver3 = new Driver("Andrew", "Outkast", "Chester");
	driver3.drivingLicense = true;
	driver3.drivingLicensePassed = 2001;
	driver3.yearOfBirth = 1980;

module.exports = {driver1, driver2, driver3};
},{"./driver":2}]},{},[1,2,3]);
