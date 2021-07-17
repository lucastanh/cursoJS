function Product(name, price) { 
    this.name = name;
    this.price = price;
}
Product.prototype.discount = function(percentage) {
    this.price -= (this.price * (percentage/100));
}
Product.prototype.increase = function(percentage) {
    this.price += (this.price * (percentage/100));
}

const p1 = new Product('Shirt', 50);

const p2 = {
    name: 'Mug',
    price: 20,
}
Object.setPrototypeOf(p2, Product.prototype);
p2.discount(10);

const p3 = Object.create(Product.prototype, {
    price: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 100,
    }
});

p3.discount(10);
console.log(p3);