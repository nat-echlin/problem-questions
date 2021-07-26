// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

isPalindrome = (input) => {
    reversed = input.toString().split('').reverse().join('')
    // console.log(reversed)
    if (reversed == input.toString()) {
        return true
    } else {
        return false
    }
}

init = () => {
    let biggest = 0
    for(let i = 999; i >= 1; i-= 1) {
        for(let j = 999; j >= 1; j-= 1) {
            product = i * j
            if (product > biggest && isPalindrome(product)) {
                biggest = product
            }
        }    
    }

    return biggest
}


console.log(init())

// returns 906609 : correct