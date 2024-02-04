
// a selection of lunch entrees available in all Connecticut correctional facilities 
const entrees = ['slop','hot dogs','egg salad','tuna salad','cheeseburger','tuna salad','chicken salad','bologna and cheese','jamaican beef patty','peanut butter and jelly'];

const menu = {
  _meal: "",
  _price: 0,

  get meal() {
    return this._meal;
  },
  get price() {
    return this._price;
  },

  get todaysSpecial() {
    if (
      this._meal &&
      this._price &&
      typeof this._meal === "string" &&
      typeof this._price === "number"
    )
      return `Today's Special is ${this._meal} for \$${this._price}!`;
    else return "Meal or price was not set correctly!";
  },

  set meal(meal) {
    if (typeof meal != "string")
      return console.log(`menu.meal property must be a String: ${meal}`);
    this._meal = meal;
  },

  set price(price) {
    if (typeof price != "number")
      return console.log(`menu.price property must be a Number: ${price}`);
    this._price = price;
  },
};

// generate random lunch special and log 
menu.meal = entrees[Math.floor(Math.random()*entrees.length)];
menu.price = parseFloat((Math.random() * 11).toFixed(2));

console.log(menu.todaysSpecial);
// console.log(menu,'\n');
