class Vehicle{
    drive():void{
        console.log('chuga chuga')
    }
}

const toyota = new Vehicle()


class Car extends Vehicle {
    drive():void{
        console.log("vrom vrom")
    }
}

const buick = new Car()
 buick.drive()
