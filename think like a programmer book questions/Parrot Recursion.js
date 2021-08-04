const parrotNumbers = [7, 5, 3, 10, 2]

const nonRecursiveMethod = () => {
    let sum = 0
    for(let i = 0; i < parrotNumbers.length; i++) {
        sum += parrotNumbers[i]
    }
    return sum
}

// console.log(nonRecursiveMethod())
// returns 27: correct


const tailRecursive = () => {
    // how tf do i code this up
}

const headRecursive = () => {
    // same issue 
}