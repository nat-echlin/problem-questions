const testCases = [
    [1, 2, 3],
    ["abc", "ab", "a"],
    ["a", "ab", "a"],
    ["abcd", "abcd", "abc", "abcdef"], 
    ["abscs", "", "aoun,sjs7", "bawcnvda", "as", "dasje", ";msosnf", "asjkg da wah", ", asdaw  sda"]
]

const check = array => {
    // const result = array.findIndex((element, index) => {
    //     if (array[index + 1] == undefined) {
    //         continue
    //     }
    //     return element.length <= array[index + 1].length
    // })
 
    let result = -1 
    for (let index = 0; index < array.length - 1; index++) {
        const element = array[index]
        if (element.length < array[index + 1].length) {
            result = index
            break
        }
    }

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

const x = sort(testCases[4])
x.forEach(element => {
    console.log(`"${element}"   has length: ${element.length}`)
})
//  returns : 

// "asjkg da wah"   has length: 12
// ", asdaw  sda"   has length: 12
// "aoun,sjs7"   has length: 9
// "bawcnvda"   has length: 8
// ";msosnf"   has length: 7
// "abscs"   has length: 5
// "dasje"   has length: 5
// "as"   has length: 2
// ""   has length: 0



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
