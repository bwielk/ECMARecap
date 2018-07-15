(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
