// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

sumFibonacci = (max) => {
    let n1 = 1, n = 1, sum = 0
    do {
        // tempN = n
        // n = n + n1 
        // n1 = tempN 

        tempN = n
        n = n + n1 
        n1 = tempN 

        if (n % 2 == 0 && n < max) {
            sum += n
        }

        console.log(n)
    } while (n < max)   

    return sum
}

console.log(sumFibonacci(4000000))

// returns 4613732 : correct