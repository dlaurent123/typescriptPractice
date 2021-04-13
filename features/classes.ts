class Vehicle{
     

   constructor(public color:string){
    
   }

   public drive():void{
        console.log('chuga chuga')
        console.log(this.color)
    }
}

const toyota = new Vehicle("red")
toyota.drive()

// class Car extends Vehicle {
//     drive():void{
//         console.log("vrom vrom")
//     }
// }

// const buick = new Car()
 
