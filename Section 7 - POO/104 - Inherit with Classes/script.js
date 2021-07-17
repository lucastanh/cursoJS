// SuperClass
class eletronicDevice {
    constructor(name) {
        this.name = name;
        this.on = false;
    }

    turnOn() {
        if(this.on) {console.log("Device is already on");return};
        this.on = true;
        console.log(`${this.name} it's on`);
    }

    turnOff() {
        if(!this.on) {
            console.log("Device is already off");
            return;
        }
        this.on = false;
        console.log(`${this.name} it's off`);
    }
}


class Smartphone extends eletronicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
    
    
}

const d1 = new Smartphone("Iphone", "Black", "X");
console.log(d1)
d1.turnOn();
d1.turnOn();
d1.turnOff();
d1.turnOff();
d1.turnOff();