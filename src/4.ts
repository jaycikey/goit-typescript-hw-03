// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false; // По замовчуванню двері зачинені
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey()} came into the house.`);
    } else {
      console.log("The door is closed. You cannot enter.");
    }
  }

  abstract openDoor(key: Key): void;
}

// Клас MyHouse успадковує абстрактний клас House
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Invalid key. The door remains closed.");
    }
  }
}

// Створення об'єктів та спроба відтворення сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
