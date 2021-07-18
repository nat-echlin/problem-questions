// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// let notFound = true



let notFound = true
aLoop: for (let a = 1; notFound == true; a++) {
    bLoop: for (let b = a + 1; notFound == true; b++) {
        const c = 1000 - a - b
        if (c < a || c < b) {
            continue aLoop;
        } else {
            if (a ** 2 + b ** 2 == c ** 2) {
                notFound = false
                console.log(`${a * b * c}`)
            } else {
                console.log(`${a}  ${b}  ${c}`)
            }

        }
    }    
}

// returns a: 200, b: 375, c: 425, abc: 31875000    : correct