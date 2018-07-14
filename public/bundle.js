(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {driver1} = require('./drivers');
var {driver2} = require('./drivers');
var {driver3} = require('./drivers');
var Driver = require('./driver');

////////////////////////////////////// VAR, CONST and LET /////////////////////////////////////////////

//VAR AND FUNCTION SCOPE - VARs will be read by the console log
function readDriverDetailsES5(person){
	if(person.drivingLicense){
		var name = person.name;
		var surname = person.surname;
		var yearOfPassing = person.drivingLicensePassed;
	}else{
		console.log("No such driver");
	}
	console.log("DRIVER DETAILS : " + name + " " + surname + ". Gained driving license in " + yearOfPassing);
}

//VAR AND BLOCK SCOPE
function readDriverDetailsES6(person){
	if(person.drivingLicense){
		let name = person.name;
		let surname = person.surname;
		const yearOfPassing = person.drivingLicensePassed;
		console.log("DRIVER DETAILS : " + name + " " + surname + ". Gained driving license in " + yearOfPassing);//Will be read
	}else{
		console.log("No such driver");
	}
	//console.log("DRIVER DETAILS : " + name + " " + surname + ". Gained driving license in " + yearOfPassing);//Won't be read unless declared outside of the block
}

readDriverDetailsES5(driver3);
readDriverDetailsES6(driver3);
////////////////////////////////////// METHODS ES5 vs ES6 //////////////////////////////////////////////

function driversLicenseES5(passedTest, person){
	var personNameAndSurname = person.name + " " + person.surname;
	if((passedTest) && (!person.drivingLicense)){
		person.drivingLicense = true;
		person.drivingLicensePassed = new Date().getFullYear();
		console.log(personNameAndSurname + " has passed the test");
		console.log(person);
	}else if((passedTest) && (person.drivingLicense)){
		console.log(personNameAndSurname + " already passed the driving test in " + person.drivingLicensePassed);
		console.log(person);
	}else{
		console.log(personNameAndSurname + " hasn't passed the test");
		console.log(person);
	}
}

driversLicenseES5(true, driver1);//Passed
driversLicenseES5(false, driver2);//Didn't pass
driversLicenseES5(true, driver3);//Has already passed

////////////////////////////////////// STRING //////////////////////////////////////////////

//ES5
console.log(driver1.name + " " + driver1.surname + " => " + (driver1.drivingLicense ? "YES" : "NO"));
console.log(driver2.name + " " + driver2.surname + " => " + (driver2.drivingLicense ? "YES" : "NO"));
console.log(driver3.name + " " + driver3.surname + " => " + (driver3.drivingLicense ? "YES" : "NO"));

//ES6 TEMPLATE LITERALS

const driver1NameAndSurname = `${driver1.name} ${driver1.surname}`;
console.log(`${driver1NameAndSurname} -> ${driver1.drivingLicense}`);
console.log(`${driver2.name} ${driver2.surname} -> ${driver2.drivingLicense}`);
console.log(`${driver3.name} ${driver3.surname} -> ${driver3.drivingLicense}`);

console.log(`${driver1NameAndSurname} starts with J ${driver1NameAndSurname.startsWith('J')}`);//case sensitive - returns true
console.log(`${driver1NameAndSurname} starts with j ${driver1NameAndSurname.startsWith('j')}`);//case  sensitive - returns false

console.log(`${driver1NameAndSurname} ends with ith ${driver1NameAndSurname.endsWith('ith')}`);//true
console.log(`${driver1NameAndSurname} ends with Smith ${driver1NameAndSurname.endsWith('Smith')}`);//true

console.log(`${driver1NameAndSurname} includes space ${driver1NameAndSurname.includes(' ')}`);//true
console.log(`${driver1NameAndSurname} includes hn Sm ${driver1NameAndSurname.includes('hn Sm')}`);//true
console.log(`${driver1NameAndSurname} includes Sarah ${driver1NameAndSurname.includes('Sarah')}`);//false

console.log(`Repeat the details three times => ${driver1NameAndSurname.repeat(3)}`);

////////////////////////////////////// ARROW FUNCTIONS //////////////////////////////////////////////

const yearsOfBirth = [driver1.yearOfBirth, driver2.yearOfBirth, driver3.yearOfBirth, 2019];

//ES5
var agesES5 = yearsOfBirth.map(function(el){
	let result = new Date().getFullYear() - el;
	if(result >= 0){
		return result;
	}
});
console.log(agesES5);

//ES6
const agesES6 = yearsOfBirth.map(el => {
	let result = new Date().getFullYear() - el;
	if(result >= 0){
		return result;
	}
});
console.log(`ES6 example ${agesES6}`);

const printAgesES6 = yearsOfBirth.map((el, index) => `Age element number ${index}: ${new Date().getFullYear() - el}`);
console.log(printAgesES6);

////////////////////////////////////// ARROW FUNCTIONS //////////////////////////////////////////////

//ES5

var boxES5 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		var self = this;// now this refers to the object, not the window
		document.querySelector('.green').addEventListener('click', function(){
			var text = "This is box number " + self.position + " and is " + self.color;
			alert(text);
		});
	}
}

boxES5.clickMe();

//ES6

const boxES6 = {
	color: 'blue',
	position: 2,
	clickMe: function(){
		document.querySelector('.blue').addEventListener('click', () => {
			var text = "This is box number " + this.position + " and is " + this.color;
			alert(text);
		});
	}
}

boxES6.clickMe();

console.log(new Driver("Adam", "Smith").ownedCarsES5(['Audi', 'Toyota', 'Mitsubishi']));
console.log(new Driver("Adam", "Page").ownedCarsES6(['Audi A4', 'Toyota C6', 'Mitsubishi Charisma']));
},{"./driver":2,"./drivers":3}],2:[function(require,module,exports){
function Driver(name, surname){
	this.name = name;
	this.surname = surname;
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

var driver1 = new Driver("John", "Smith");
	driver1.drivingLicense = false;
	driver1.drivingLicensePassed = null;
	driver1.yearOfBirth = 1986;

var driver2 = new Driver("Sarah", "MacFleetwood");
	driver2.drivingLicense = false;
	driver2.drivingLicensePassed = null;
	driver2.yearOfBirth = 1992;

var driver3 = new Driver("Andrew", "Outkast");
	driver3.drivingLicense = true;
	driver3.drivingLicensePassed = 2001;
	driver3.yearOfBirth = 1980;

module.exports = {driver1, driver2, driver3};
},{"./driver":2}]},{},[1,2]);
