import faker from "faker"


export class Company {
    companyName: string
    catchPharse: string
    location:{
        latitude: number,
        longitude: number
    }
    markerContent():string{
        return `
                <div>
                   <h1>Company Name: ${this.companyName}</h1>
                   <h3>CatchPharse: ${this.catchPharse}</h3>
                </div>
                `
    }

    constructor(){
        this.companyName = faker.company.companyName()
        this.catchPharse = faker.company.catchPhrase()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
}