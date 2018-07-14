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

////////////////////////////////////// REST AND DEFAULT PARAMETERS /////////////////////////////////////////////

//REST ES5
function isFullAgeES5Poland() {
	var args = Array.prototype.slice.call(arguments);//makes args turn into an array
	args.forEach(function(currentElement){
		console.log(`Is a person born in ${currentElement} of full age? ANSWER: ${(new Date().getFullYear() - currentElement) >= 18}`);
	});
}

function isFullAgeES5Custom(limit) {
	//1 is the index from which slice will work.
	//This will exclude the limit parameter that is at the beginning of the args object.
	var argsArr = Array.prototype.slice.call(arguments, 1);
	argsArr.forEach(function(currentElement){
		console.log(`${currentElement} => ${(new Date().getFullYear() - currentElement) >= limit}`);
	})
}

isFullAgeES5Poland(1990, 1999, 2016);
isFullAgeES5Custom(21, 1983, 1995, 2000, 2012, 2016, 2017);

//REST ES6
const isFullAgeES6Poland = (...years) =>{
	years.forEach(currentElement => (console.log(`Is a person born in ${currentElement} of full age? ANSWER: ${new Date().getFullYear() - currentElement >= 18}`)));
}

const isFullAgeES6Custom = (limit, ...years) => {
	years.forEach(currentElement => (console.log(`Is a person born in ${currentElement} of full age? ANSWER: ${new Date().getFullYear() - currentElement >= 18}`)));
}

isFullAgeES6Poland(1987, 1988, 1992, 1993, 1996);
isFullAgeES6Custom(25, 1999, 1980, 2010, 1987);
isFullAgeES6Custom(20);

//DEFAULT PARAMETERS ES5

var driver4 = new Driver("Sean", "Rochester");
console.log(driver4);

//DEFAULT PARAMETERS ES6
