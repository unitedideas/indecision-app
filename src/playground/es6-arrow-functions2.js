// arguments object - no longer bound with the arrow function

// this keyword - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
};

console.log(add(55, 1, 1001));


const user = {
    name: "Shane",
    cities: ['Portland', 'San Diego', 'North Carolina'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};


console.log(user.printPlacesLived());


//challenge area

const multiplier = {
    numbers: [3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());












