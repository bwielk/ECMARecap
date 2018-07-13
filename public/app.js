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