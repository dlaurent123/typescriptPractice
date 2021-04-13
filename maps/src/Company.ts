import faker from "faker"


export class Company {
    companyName: string
    catchPharse: string
    location:{
        latitude: number,
        longitude: number
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