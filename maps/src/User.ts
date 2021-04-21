import faker from "faker"

export class User{
    name:string
    location:{
        latitude:number,
        longitude:number
    }
    markerContent():string{
      return `User Name: ${this.name}`
    }
    constructor(){
    this.name = faker.name.firstName()
    this.location = {
        latitude: parseFloat(faker.address.latitude()),
        longitude: parseFloat(faker.address.longitude())
    }
    }
}



