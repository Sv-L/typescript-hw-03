class Key{
    private signature: number;
    constructor() {
        this.signature = Math.random()
    }

    getSignature(): number{
        return this.signature
    }
}

class Person {
    private key: Key

    constructor(key: Key) {
        this.key = key
        console.log('key Person', key)
    }

    getKey():Key{
        return this.key
    }
}


abstract class House{
    protected tenants: Person[] = [];
    protected door: boolean = false;
    protected key: Key

    constructor(key: Key) {
        this.key = key
    }

     public abstract openDoor(key: Key): void

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
            console.log("Person has entered the house.")
        } else {
            console.log("The door is closed. Can't enter.")
        }
    }
   
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door is opened.")
        } else {
            console.log("Wrong key! The door remains closed.")
        }
    }
}

const key = new Key();
console.log(key.getSignature())
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);


export {};
