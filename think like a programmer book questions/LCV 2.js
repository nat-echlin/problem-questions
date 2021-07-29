const validate = input => {
    const listNum = input.toString().split('')

    const total = {
        even: 0,
        odd: 0,
        digitCounter: 0,
        final: undefined
    }

    const incrementer = (num, double, notDouble) => {
        if (num * 2 >= 10) {
            total[double] += 1 + (num * 2) - 10
        } else {
            total[double] += num * 2
        }
        total[notDouble] += num
    }

    listNum.forEach((element, index) => {
        total.digitCounter++
        digit = parseInt(element)

        if (index % 2 == 0) { // index is even

            incrementer(digit, "even", "odd")

        } else { // index is odd

            incrementer(digit, "odd", "even")

        }
    })

    if (total.digitCounter % 2 == 0) {     // even lengthed :
        total.final = total.even 
    } else {    // odd lengthed :
        total.final = total.odd
    }

    if (total.final % 10 == 0) {
        return true
    } else {
        return false
    }
}


console.log(
    validate(2188)      // 4 + 1 + 1 + 8 + 8 = 22
)