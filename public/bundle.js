(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {driver1} = require('./drivers');
var {driver2} = require('./drivers');
var {driver3} = require('./drivers');

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
console.log(`${driver1.name} ${driver1.surname} -> ${driver1.drivingLicense}`);
console.log(`${driver2.name} ${driver2.surname} -> ${driver2.drivingLicense}`);
console.log(`${driver3.name} ${driver3.surname} -> ${driver3.drivingLicense}`);








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
