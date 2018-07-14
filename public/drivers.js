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