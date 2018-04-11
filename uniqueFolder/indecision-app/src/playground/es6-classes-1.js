class Person {
  constructor(name = 'Sam', age = 3) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name} !`;
  }
  getDescription() {
    return `${this.name} is ${this.age}`;
  }
}

// subclass of Person

class Student extends Person {
  // to add major - override the constructor
  constructor(name, age, major) {
    // call parent's constructor - super refers to parent class
    // super() is the same as calling the parent's constructor
    super(name, age);
    this.major = major;
  }
  // add a new method for the child class, Student
  hasMajor() {
    return !!this.major; //returns true if person has a major
    // returns false if they don't have a major
  }
  // override a parent class's method

  getDescription() {
    let description = super.getDescription(); // getting parent's

    if (this.hasMajor()) {
      //if major, alter description
      description += ` with major being ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.location = homeLocation;
  }
  hasLocation() {
    return !!this.location;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasLocation()) {
      description += `  I am visiting from ${this.location}.`;
    }
    return description;
  }
}

const me = new Traveler('Nancy Urciuoli', 56, 'Whippany');
console.log(me.getDescription());
console.log(me.location);

const other = new Traveler();
console.log(other.getDescription());
