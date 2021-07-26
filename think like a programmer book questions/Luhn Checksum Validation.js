const validate = input => {
    const str = input.toString()
    const listNum = str.split('')
    let total = 0
    const needsDouble = index => {
        const length = listNum.length
        if (length % 2 == 0) {
            if (index % 2 == 0) {
                return true
            } else {
                return false
            }
        } else {
            if (index % 2 == 0) {
                return false                           // 3 3 4 7 :double 0, 2
            } else {
                return true
            }
        }
    }
    for (let i = 0; i < listNum.length; i++) {
        num = parseInt(listNum[i])
        let toAdd = undefined
        if (needsDouble(i)) { // RUNS ON EVERY OTHER DIGIT, IE INDEX 1, 3, 5
            if (num * 2 >= 10) {
            //  const subStr = (num * 2).toString()
            //  const subListNum = subStr.split('')
            //  toAdd = parseInt(subListNum[0]) + parseInt(subListNum[1])
                toAdd = 1 + (num * 2) - 10
            } else {
                toAdd = num * 2
            } 
        } else { // RUNS ON EVEN INDEXES, IE 0, 2, 4
            toAdd = num
        }
        total += toAdd
    }
    if (total % 10 == 0) {
        return true
    } else {
        return false
    }
}

// generates some valid nums
const gen10NumsFrom = (startAt, howMany) => {
    counter = 0
    for (let i = startAt; counter < howMany; i++) {
        result = validate(i)
        if (result) {
            console.log(i)
            counter++
        }
    }
}

gen10NumsFrom(1000, 5)

console.log(
    validate(1762483)
) // returns true (valid) : correct