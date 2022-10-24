/**
 * - Основы ООП: классы, обьект, интерфейс
 */

import { getName } from 'domutils';

/**
 * - Функция конструктор
 * - Свойство Function.prototype
 */

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };
// /**
//  * На прототипе у Manager записывается метод sell
//  * которые будут доступны по ссылке
//  */
// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// console.dir(Manager);

// const mango = new Manager('Mango', 100);
// console.log(mango);
// mango.sell();
// console.log(mango);

// const poly = new Manager('Poly', 250);
// poly.sell();
// poly.changeName('');
// console.log(poly);

// console.log(mango.__proto__);
// console.log(Manager.prototype);
// console.log(mango.__proto__ === Manager.prototype);

// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}`;
//   },
// };

// // Recoding

// const Manager = function (name = 'Manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function (product) {
//   this.sales += 1;
//   return `Manager ${this.name} sold ${product}`;
// };

// const alex = new Manager('Alex', 100);
// console.log(alex.sell('pan'));
// console.log(alex);

/**
 * Занятие --- 2
 */

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

// Создаем статическое свойство Hero
// которое будет доступно только ему
Hero.description = 'This is a Hero static property';

console.dir(Hero);
console.log(Hero.description);

Hero.showStats = function (hero) {
  console.log('Logging stats from Hero.showStats: ', hero);
};
/**
 * Функция new создает пустой обьект
 * mango вызывается в контексте Hero
 * this ссылается на новосозданный обьект +
 * в __proto__ к манго записывается ссылка на Hero.prototype
 */
const mango = new Hero('mango', 1000);
console.log(mango);
// mango.showStats();

Hero.showStats(mango);
// Math.PI - это статический метод который не будет доступен
// в прототипе обьекта
// console.log(Math.PI);
