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

const [name, surname, passedLicense, yearOfPassing] = [driver1.name, driver1.surname, driver1.drivingLicense, driver1.drivingLicensePassed];
console.log(`The name and surname of the driver is ${name} ${surname}. 
			 The driver ${passedLicense ? 
			 	`received his/her driving license in ${yearOfPassing}` 
: `hasn't got his/her license yet`}`);