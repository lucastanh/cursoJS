// define.Property - DefineProperties
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock;

    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,   // show the key
        configurable: true,
        get: function() {
            return stock;
        },
        set: function(value) {
            if(isNaN(value)) {
                throw TypeError('Stock must be a number');
            }

            this.stock = value;
        }
    })

}

function createProduct(name) {
    return {
        get name() {
            return name;
        },

        set name(value) {
            name = value;
        }
    }
}

const p1 = new Product('Shirt', 20, 3);
// p1.stock = 's';
console.log(p1.stock)

// const p1 = createProduct('Smartphone');
// p1.name = 'Shirt'
// console.log(p1.name)