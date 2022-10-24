// ------- Task-1 -------
// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(this.login, this.email);
// };

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
// poly.getInfo();

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });
// mango.getInfo();

// ------- Task-2 -------

// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });
// mango.getInfo();

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });
// poly.getInfo();

// ------- Task-3 -------

// class Storage {
//   constructor([...items]) {
//     this.items = items;
//   }

//   getItems() {
//     console.log([...this.items]);
//   }

//   addItem(item) {
//     return this.items.push(item);
//   }

//   removeItem(itemName) {
//     const index = this.items.indexOf(itemName);

//     if (index === -1) {
//       console.log(`You do not have ${itemName}`);
//       return;
//     }

//     this.items.splice(index, 1);
//     console.log(`${itemName} has deleted`);
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// console.log(storage);
// storage.getItems();
// storage.addItem('Pan');
// storage.getItems();
// storage.removeItem('Pan');
// storage.getItems();

// ------- Task-4 -------

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     const newVal = this._value + str;
//     this._value = newVal;
//   }

//   prepend(str) {
//     const newVal = str + this._value;
//     this._value = newVal;
//   }

//   pad(str) {
//     const newVal = str + this._value + str;
//     this._value = newVal;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value);

// ----- Task-5 -------

class Car {
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs = function (car) {
    const specks = Object.entries(mustang);
    console.log(...specks);
  };

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    this.speed += value;
  }

  decelerate(value) {
    this.speed -= value;
  }

  drive(hours) {
    this.distance += hours;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
// Car.getSpecs(mustang);

const bmwM5 = new Car({ maxSpeed: 320, price: 50000 });
console.log(bmwM5);
