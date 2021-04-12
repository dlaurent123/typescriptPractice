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