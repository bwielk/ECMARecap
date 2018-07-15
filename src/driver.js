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