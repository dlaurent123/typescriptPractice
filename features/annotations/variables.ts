let apples: number = 5

let speed: string = "fast"

let hasName: boolean = true

let nothingMuch : null = null

let nothing : undefined = undefined

// built in objects

let now: Date = new Date()

// array 
// below represents a type annotation that states the type is an array with strings
let colors: string[] = ["red", "green","blue"]

let myNumbers: number[] = [1,2,3]

let test: object[] = [{yes:1}]

// object litteral
let point: {x:number; y:number} = {
    x:10,
    y:20
}


// Type annotation for functions

const logNumber: (i:number) => void = (i:number) =>{
    console.log(i)
}

// when to use annotations
/////////
// 1.function that returns type any

const json = '{"x":10, "y":"20"}'

const coordinates: {x:number; y:number}  = JSON.parse(json)


const add = (a:number, b:number): number =>{
    return a + b
}