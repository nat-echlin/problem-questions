const input = [2, 3, 8, 9, 3, 5, 7, 7, 7, 2, 1, 2, 2]

let triedVals = []

const max = {
    "value":undefined,
    "amount":0
}

for (let i = 0; i < input.length; i++) {
    const currentInput = input[i]
    if (triedVals.includes(currentInput)) {
        continue
    } else {
        triedVals.push(currentInput)
        let occurences = 0
        for (let j = i; j < input.length; j++) {
            if (input[j] == currentInput) {
                occurences++
            }
        }
        if (occurences > max.amount) {
            max.value = currentInput
            max.amount = occurences
        }
    }
}

console.log(max.value)



// let totals = {}
// for(let i = 0; i < input.length; i++) {
//     totals[input[i].toString] = totals[input[i].toString] + 1
// }
// console.log(totals)