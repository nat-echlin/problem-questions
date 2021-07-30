const arr = ["abscs", "", "aoun,sjs7", "bawcnvda", "as", "dasje", ";msosnf", "asjkg da wah", ", asdaw  sda"]

const test = [1, 2, 3]
const test2 = ["abc", "ab", "a"]

const check = array => {
    return array.every((element, index) => {
        if (index == array.length - 1 || element.length >= array[index + 1].length) {
            return [true]
        } else {
            return [false, index, index + 1]
        }
    })    
}

const sort = array => {
    fArray = array
    do {
        result = check(fArray)
        if (result[0] == false) {
            fArray.insert()

        }
    } while (!result[0])
    return fArray
}