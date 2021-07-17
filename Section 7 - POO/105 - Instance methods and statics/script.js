class remoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // instance method
    turnUpVolume() {
        this.volume += 2;
    }

    lowerVolume() {
        this.volume -= 2;
    }

    // Static method
    static sum(x, y) {
        console.log(x + y)
    }
}

const control = new remoteControl("LG");
control.turnUpVolume()
control.turnUpVolume()
console.log(control)
// control.trocaPilha() // dont work

remoteControl.sum(4, 2);
