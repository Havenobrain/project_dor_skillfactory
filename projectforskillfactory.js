class ElectricalDevice {
    constructor(power, connected){
        this.power = power;
        this.connected = true
    }
    getConnected(){
        if (this.connected){
            return 'The device is already connected!'
        } else {
            return 'You have to connect this device!'
        }
    }
}

class Lamps extends ElectricalDevice {
    constructor(name, color, size, light, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.size = size;
        this.light = light;
    }
}


class Computers extends ElectricalDevice {
    constructor(name, color, model, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.model = model;
    }
}


const lampD303B = new Lamps ('D303B', 'black', 'medium', 'white', 75)

console.log(lampD303B.getConnected())
console.log(lampD303B)