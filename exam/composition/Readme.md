# Car design

You just finished modeling and designing a car in a typed language (Java, Typescript, etc.) and the client realized that they would like to have customizable wheels.

How should we go about this?

## Composition
Composition is a software design pattern that lets you reuse objects in order to create more complex objects.

At first this might sound weird, but let's look at an example:

- Houses have doors
- Doors can have different properties
  - color
  - size
  - direction of opening, etc.

When building a house you want the client to have the flexibility to use already existing and easy to replace objects (e.g. doors)

An example of this scenario:

```ts
class House {
    private door: Door;

    constructor(door) {
        this.door = door;
    }

    public showDoor() {
        console.log(`My door is ` + this.door.getColor());
    }

    public replaceDoor(door) {
        this.door = door;
    }
}

class Door {
    private color: 'red' | 'blue' | 'yellow'

    constructor(color) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}


// In our code we would do something like this:
const door = new Door('red');
const house = new House(door);

house.showDoor(); // => My door is red

const newDoor = new Door('blue');
house.replaceDoor(newDoor);

house.showDoor(); // => My door is blue
```