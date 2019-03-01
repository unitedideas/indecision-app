

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
   getGreeting() {
        return `HI I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}


class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;

    }
}


class Travler extends Person{
    constructor(name, age, location = 'Somewhere'){
        super(name, age);
        this.location = location;
    }
    hasLocation(){
    return !!this.location
    }

    homeLocation(){
        let greeting = super.getGreeting();

        if(this.hasLocation()){
            greeting += ` I'm from ${this.location}.`
        }

        return greeting
    }
}

const another = new Travler('Shane The Traveler', 38, 'Philly');
console.log(another);
console.log(another.homeLocation());

const anothertraveler = new Travler(undefined, undefined, undefined);
console.log(anothertraveler);
console.log(anothertraveler.homeLocation());


const me = new Student('Shane Cheek', 38, 'Computer Science');
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getDescription());
