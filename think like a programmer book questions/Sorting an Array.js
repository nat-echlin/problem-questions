const arr = ["abscs", "", "aoun,sjs7", "bawcnvda", "as", "dasje", ";msosnf", "asjkg da wah", ", asdaw  sda"]

const testCases = [
    [1, 2, 3],
    ["abc", "ab", "a"],
    ["a", "ab", "a"]
]

const check = array => {
    // isValid = array.every((element, index) => {
    //     if (index == array.length - 1 || element.length >= array[index + 1].length) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // if (isValid) {
    //     return [true]
    // } else {
    //     return [
    //         false,
    //         array.findIndex((element, index) => {
    //             index == array.length - 1 || element.length >= array[index + 1].length
    //         })
    //     ]
    // }

    result = array.findIndex((element, index) => {
        index == array.length - 1 || element.length >= array[index + 1].length
    })

    if (result == -1) {
        return [true]
    } else {
        return [false, result]
    }
}

// doesnt return as array, only returns as true / false

const sort = array => {
    let fArray = array
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

// [1, 2, 3, 4]
// // insert [2] at [1]
// [1, 3, 2, 3, 4]
// // pop [3]
// [1, 3, 2, 4]


// const x = [1, 2, 3, 4]
// x.splice(1, 0, x[2])
// x.splice(3, 1)
// console.log(x)
console.log(!undefined)
console.log(sort(test2))
