const parrotNumbers = [7, 5, 3, 10, 2] // in the book, the amount of parrots at each station

const nonRecursiveMethod = (arr, size) => {
    let sum = 0
    for(let i = 0; i < size; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(nonRecursiveMethod(parrotNumbers, parrotNumbers.length))
// returns 27, correct

const arraySumDelegate = (arr, size) => {
    if (size == 0) {
        return 0
    } 

    const lastNumber = arr[size - 1]
    const allButLastNum = nonRecursiveMethod(arr, size - 1)
    return lastNumber + allButLastNum
}

// console.log(arraySumDelegate(parrotNumbers, 5)) 
// returns 27, correct

const arraySumRecursive = (arr, size) => {
    if (size == 0) {
        return 0
    } 

    const lastNumber = arr[size - 1]
    const allButLastNum = arraySumRecursive(arr, size - 1)
    return lastNumber + allButLastNum
}

// console.log(arraySumRecursive(parrotNumbers, 5))
// returns 27... how? i dont know