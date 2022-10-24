// class User {
//   constructor(name = 'user', age = 0, city = '') {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   changeCity(newCity) {
//     this.city = newCity;
//     alert(`${this.name} is currently in ${newCity}`);
//   }
// }

// let alex = new User('Alex', 28, 'Kiyv');
// console.dir(User);
// console.log(alex);

// alex.changeCity('Kharkiv');
// console.log('User.prototype', User.prototype);
// console.log('alex.__proto__', alex.__proto__);
// console.log(alex.__proto__ === User.prototype);

/**
 * Собственные свойства и for..in
 * метод hasOwnProperty()
 */

// const objA = {
//   q: 10,
//   c: 4,
// };

// const objB = Object.create(objA);
// objB.x = 1;
// objB.y = 9;

// console.log(objB.hasOwnProperty('q'));

/**
 * Не юзаем for...in потому
 * что он перебирает не только собственные свойства
 * обьекта, а и унаследованные
 * - Проходит по всей цепочке прототипов
 */
// for (const key in objB) {
//   console.log(key);
// }

// Классы

class Hero {
  static description = 'This is a static Hero property ';

  constructor(name, xp) {
    /**
     * ! Перед name ставим _ чтобы не совпадали имена у геттера и свойства
     */
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    this.xp += amount;
    console.log(`Your hero ${this.name} got ${amount} xp!`);
  }

  // changeName(newName) {
  //   this.name = newName;
  //   console.log('Name changed');
  // }

  // gainXp(amount) {
  //   this.xp += amount;
  //   console.log(`${this.name} recieved ${amount} xp`);
  // }
}
// console.dir(Hero);

// const mango = new Hero('Mango', 1000);
// console.log(mango);
// console.log(mango.name); // геттер
// mango.name = 'jdjfeopfiqep'; //сеттер
// console.log(mango);

/**
 * Класс Warrior наследует Hero
 */
class Warrior extends Hero {
  constructor(name, xp, weapon) {
    /**
     * Во время вызова супер он ссылается на this этого класса
     */
    super(name, xp);
    /**
     * Для того чтобы был доступен this
     * в классе который наследует другой
     * нужно использовать метод super() внутри
     * конструктора самым первым
     */
    this.weapon = weapon;
    this.name = name;
  }

  attack() {
    console.log(`${this.name} is attacking using ${this.weapon}`);
  }
}

// const alex = new Warrior('Alex', 1000, 'Алибарда');
// console.log(alex);
// alex.attack();
// alex.gainXp(2000);

// console.log(alex);
console.dir(Warrior);
console.log(Warrior.prototype.__proto__ === Hero.prototype);

class Paladin extends Warrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);

    this.spell = spell;
  }

  cast() {
    console.log(`${this.name} is attacking using ${this.spell} spell!`);
  }
}

const mango = new Paladin('Mango', 1000, 'Алибарда', 'FireBall');
mango.attack();
mango.gainXp(2000);
mango.cast();
console.log(mango);

/**
 * 1.Hero -> 2.Warrior -> 3.Paladin
 */

console.log(Paladin.prototype);
console.log(Warrior.prototype);
console.log(Hero.prototype);
