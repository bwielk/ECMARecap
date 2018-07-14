(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {driver1} = require('./drivers');
var {driver2} = require('./drivers');
var {driver3} = require('./drivers');
var Driver = require('./driver');

////////////////////////////////////// COLLECTIONS AND DESTRUCTURING /////////////////////////////////////////////

//ES5

var driversData = [driver1.name, driver1.surname, driver1.drivingLicense, driver1.drivingLicensePassed];

var driver1name = driversData[0];
var driver1surname = driversData[1];
console.log(driver1name + " " + driver1surname);

//ES6

const [nameDriver1, surnameDriver1, passedLicenseDriver1, yearOfPassingDriver1] = [driver1.name, driver1.surname, driver1.drivingLicense, driver1.drivingLicensePassed];
const [nameDriver3, surnameDriver3, passedLicenseDriver3, yearOfPassingDriver3] = [driver3.name, driver3.surname, driver3.drivingLicense, driver3.drivingLicensePassed];

const readDriverDetails = (name, surname, passedLicense, yearOfPassing) => {
	console.log(`The name and surname of the driver is ${name} ${surname}. The driver ${passedLicense ? `received his/her driving license in ${yearOfPassing}` : `hasn't got his/her license yet`}`);
}

readDriverDetails(nameDriver1, surnameDriver1, passedLicenseDriver1, yearOfPassingDriver1);
readDriverDetails(nameDriver3, surnameDriver3, passedLicenseDriver3, yearOfPassingDriver3);

const {name, surname} = driver3;
const {drivingLicense: hasLicense, drivingLicensePassed: dateOfPassing} = driver3;
console.log(name + " " + surname + " " + hasLicense + " " + dateOfPassing);

////////////////////////////////////// ARRAYS /////////////////////////////////////////////

const boxes = document.querySelectorAll(".box");
console.log(boxes);

//ES5

var boxesArrES5 = Array.prototype.slice.call(boxes);
/*
boxesArrES5.forEach(function(currentElement){
	currentElement.style.backgroundColor = "grey";
})
*/

//ES6
boxesArrES6 = Array.from(boxes);
boxesArrES6.forEach(currentElement => currentElement.style.backgroundColor = "pink");

/*
for(var i=0; i<boxesArrES5.length; i++){
	if(boxesArrES5[i].className === 'box blue'){
		continue;
	}
	boxesArrES5[i].textContent = `I am number ${i}`;
}
*/

for (const currentElement of boxesArrES5){
	if(currentElement.className === 'box blue'){
		continue;
	}
	currentElement.textContent = `This is a ES6 loop result`;
	currentElement.style.backgroundColor = "blue";
}

var agesOfKids = [9, 2, 12, 8];
var agesOfAdults = [23, 27, 24, 26];

var olderThan11 = agesOfKids.map(function(currentElement){
	return currentElement > 11;
})
console.log(olderThan11);
console.log("The ES5 method => " + olderThan11.indexOf(true));

//ES6

let result = agesOfKids.findIndex(currentElement => currentElement > 11);
console.log("The ES6 method => " + result);


////////////////////////////////////// SPREADS /////////////////////////////////////////////

//ES5
function addAges (a,b,c,d){
	return a + b + c + d;
}

var sum1 = addAges(9,2,12,8);
console.log(sum1);
var sumOfAgesOfKids = addAges.apply(null, agesOfKids);
console.log(sumOfAgesOfKids);

//ES6

const sumOfAgesES6 = addAges(...agesOfKids);
console.log(sumOfAgesES6);

const allAges = [...agesOfKids, ...agesOfAdults];
console.log(allAges);






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
},{"./driver":2}]},{},[1,2,3]);
