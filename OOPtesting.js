//**********Function are Objects**************

//Object Literals
//radius and location are properties
// draw is a method
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     console.log("draw");
//   }
// };
// circle.draw();

//Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }
// const circle = createCircle(1);
// // circle.draw();

// //Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw");
//   };
// }
// // Three things using "new" is doing.
// // 1st "new" is creating an empty object.
// // 2nd pointing to "this.radius" and "this.draw" to point to "Circle" object.
// //3rd is will return the Circle object function.
// const another = new Circle(1);
