const input = [2, 3, 8, 9, 3, 5, 7, 7, 7, 2, 1, 2, 2]
let totals = {}
for(let i = 0; i < input.length; i++) {
    totals[input[i].toString] = totals[input[i].toString] + 1
}
console.log(totals)