(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {driver1} = require('./drivers');
var {driver2} = require('./drivers');
var {driver3} = require('./drivers');
//let and consts

var nameES5 = "Jen Smith";
var ageES5 = 20;
nameES5 = "Jen Stone";
console.log(nameES5);

const nameES6 = "Jen Smith";
let ageES6 = 23;
//nameES6 = "Jen Miller";
console.log(nameES6);

function driversLicense(passedTest, person){
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

driversLicense(true, driver1);//Passed
driversLicense(false, driver2);//Didn't pass
driversLicense(true, driver3);//Has already passed
},{"./drivers":2}],2:[function(require,module,exports){
var driver1 = {
	name: "John",
	surname: "Smith",
	drivingLicense: false,
	drivingLicensePassed: null
}

var driver2 = {
	name: "Sarah",
	surname: "MacFleetwood",
	drivingLicense: false,
	drivingLicensePassed: null
}

var driver3 = {
	name: "Andrew",
	surname: "Outkast",
	drivingLicense: true,
	drivingLicensePassed: 2001
}

module.exports = {driver1, driver2, driver3};
},{}]},{},[1]);
