// arguments object - no longer bound with arrow function
//  if you need to use argument object, use es5
// or if you want to use this and scope becomes a problem

const add = (a, b) => {
  // console.log(arguments); can't use this with arrow function
  return a + b;
};

console.log(add(57, 10));

const user = {
  name: 'Nancy',
  cities: ['roseland', 'elizabeth', 'concord'],

  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  }
};
console.log('wow! ' + user.printPlacesLived());

const multiplier = {
  numbers: [2, 5, 4, 8, 7, 2, 34, 9, 78],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
