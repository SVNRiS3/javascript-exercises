const findTheOldest = function (people) {
	return people.reduce(
		(oldest, person) => {
			let endYear = person.yearOfDeath
				? person.yearOfDeath
				: new Date().getFullYear();
			let yearsLived = endYear - person.yearOfBirth;
			if (oldest.age < yearsLived) {
				oldest.name = person.name;
				oldest.age = yearsLived;
			}
			return oldest;
		},
		{ name: "", age: 0 }
	);
};

// Do not edit below this line
module.exports = findTheOldest;
