// Product -> increase, discount
// shirt = color, mug = material
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.discount = function(percentage) {
    this.price -= (this.price * percentage/100)
};   
Product.prototype.increase = function(percentage) {
    this.price += (this.price * percentage/100)
};


function Shirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;
Shirt.prototype.increase = function(value) {
    this.price += value;
}


function Mug(name, price, material, amount) {
    Product.call(this, name, price);
    this.material = material;
    
    Object.defineProperty(this, 'amount', {
        enumerable: true,
        configurable: false,
        get: function() {
            return amount;
        },
        set: function(value) {
            if (typeof value !== 'number') return;
            amount = value;
        }
    })
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;
Mug.prototype.discount

const gen = new Product('gen', 1);
const shirt = new Shirt('rock', 20, 'Black');
const mug = new Mug('Mug', 10, 'Plastic', 5);
mug.amount = 100; // Call Setter

console.log(mug.amount); // Call Getter
console.log(mug);
console.log(shirt);
console.log(gen);
