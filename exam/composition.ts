import { blue, green, red } from "chalk";

type carColor = 'red' | 'blue' | 'yellow'
type wheelColor = 'silver' | 'carbon';

export class Car {
    private color: 'red' | 'blue' | 'yellow';
    private wheelSize: number;
    private wheelColor: 'silver' | 'carbon';
    private wheelFrictionFactor: number;

    constructor (color: carColor, wheelSize: number, wheelColor: wheelColor, wheelFrictionFactor: number){
        this.color = color;
        this.wheelSize = wheelSize;
        this.wheelColor = wheelColor;
        this.wheelFrictionFactor = wheelFrictionFactor;
    }

    public showCar() {
        const myCar = `
        ${blue('My car is so cool:')}
        - Wheel size: ${red(this.wheelSize)},
        - Wheel Color: ${red(this.wheelColor)}
        - Wheel Friction Factor: ${red(this.wheelFrictionFactor)}
        `
        console.log(myCar)
        return myCar
    }
}
/**
 * Use this in the test file:
 * 
 * const car = new Car('blue', 20, 'carbon', 0.9) 
 * car.showCar()
 */
