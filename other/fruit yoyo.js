// 80 fruit yoyo cards

let sum = 0
for (let i = 80; i >= 1; i -= 1) {
    sum += 80 / i
}
console.log(`You will need on average: ${Math.ceil(sum)} packs of fruit yoyos to get all 80 cards. \nThis comes to ${Math.ceil(sum) * 2} rolls!`)