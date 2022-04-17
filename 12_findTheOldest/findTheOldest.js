const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let currentDeath = currentPerson.yearOfDeath;
        if (!currentDeath) currentDeath = new Date().getFullYear();
        let oldestDeath = oldestPerson.yearOfDeath;
        if (!oldestDeath) oldestDeath = new Date().getFullYear();
        let currentPersonAge = currentDeath - currentPerson.yearOfBirth;
        let oldestPersonAge = oldestDeath - oldestPerson.yearOfBirth;
        if (currentPersonAge > oldestPersonAge) return currentPerson;
        return oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
