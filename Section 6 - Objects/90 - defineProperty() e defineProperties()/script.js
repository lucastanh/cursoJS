// define.Property - DefineProperties
function Product(name, price, stock) {
    Object.defineProperty(this, 'stock', {
        enumerable: false,   // show the key
        value: stock,       // value
        writable: true,     // can change
        configurable: true
    })

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true,
        },

        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true,
        },
    })
}

const p1 = new Product('Shirt', 20, 3);
console.log(p1)