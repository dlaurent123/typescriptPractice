interface Vehicle{
    name: string,
    year:{1:string,2:number},
    broken:boolean,
    summary(name:string):string 
}


const carMakers = ["ford","tesla","jeep"]

const dates = [new Date(), new Date()]

const carsByMake = [
    ["model 3"],
    ["comero"]
]


// flexable types 

const importantDates: {a:number; b:number} | number[] = []

// tuples 

type Drink = [string,boolean,number]

const pepsi: Drink = ["brown",true,40]


const oldCivic = {
    name:"civic",
    year:{1:"yea",2:1},
    broken:true,
    summary():string{
      return `${this.name}`
    }
}

const printVehicle = (vehicle:Vehicle): void =>{
    console.log(`Name:${vehicle.name}`)
    console.log(`year:${vehicle.year}`)
    console.log(`broken:${vehicle.broken}`)
}




