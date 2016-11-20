var starWarsNames = require('./starwars-names.json');
var UniqueRandomArray = require('unique-random-array');

module.exports = {
	all: starWarsNames,
	random: UniqueRandomArray(starWarsNames)
};