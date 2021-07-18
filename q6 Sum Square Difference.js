// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.





// for this one i just used the formula and logic that:
// Sum of first n numbers = n(n+1)/2
// Sum of squares of first n numbers = n(n+1)(2n+1)/6

sumSquareDifference = n => {
    sumSquared = (n * (n + 1) / 2) ** 2
    squaresSummed = n * ((n + 1) * (2 * n + 1)) / 6
    return sumSquared - squaresSummed
}

console.log(sumSquareDifference(100))

// returns 25164150 : correct