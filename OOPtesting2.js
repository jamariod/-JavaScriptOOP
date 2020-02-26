//Example 1
// const Car = {
//   name: "BMW",
//   type: "M5",
//   color: "Black"
// };

//console.log(Car.color, Car.name, Car.type);

//Example 2
class Car {
  constructor(name, type, color) {
    this.name = "BMW";
    this.type = "M5";
    this.color = "Black";
  }
}
const yourCar = new Car();
console.log(yourCar);
