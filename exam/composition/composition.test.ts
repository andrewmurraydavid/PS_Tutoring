import { Car } from "./composition";
// import { Car as newCar, Wheel } from "./composition-fixed";

describe('Before changes', function() {
  it('create car', function() {
    const car = new Car('blue', 20, 'carbon', 0.9)
    expect(car.showCar()).toMatchSnapshot('car-design')
  }); 
});

describe('After changes', function() {
  it('create car and wheel', function() {
    // const wheel = new Wheel(20, 'carbon', 0.9)
    // const car = new newCar('blue', wheel)
    // expect(car.showCar()).toMatchSnapshot('car-design')
  }); 
});

