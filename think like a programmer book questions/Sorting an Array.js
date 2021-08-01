const testCases = [
    [1, 2, 3],
    ["abc", "ab", "a"],
    ["a", "ab", "a"],
    ["abscs", "", "aoun,sjs7", "bawcnvda", "as", "dasje", ";msosnf", "asjkg da wah", ", asdaw  sda"]
]

const check = array => {
    result = array.findIndex((element, index) => {
        element.length >= array[index + 1].length
    })

    if (result == -1) {
        return [true]
    } else {
        return [false, result]
    }
}

const sort = array => {
    let result, fArray = array
    do {
        result = check(fArray)
        if (result[0] == false) {
            startIndex = result[1]
            fArray.splice(startIndex, 0, fArray[startIndex + 1])
            fArray.splice(startIndex + 2, 1)
        }
    } while (!result[0])
    return fArray
}

c



// pseudo code 

// [1, 2, 3, 4]
// // insert [2] at [1]
// [1, 3, 2, 3, 4]
// // pop [3]
// [1, 3, 2, 4]

// const x = [1, 2, 3, 4]
// x.splice(1, 0, x[2])
// x.splice(3, 1)
// console.log(x)
