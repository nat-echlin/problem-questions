// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


nthPrime = n => {
    while (primes.length < n) {
        
    }
}
prime = 4

genPrime = () => {
    let j = primes[primes.length - 1]
            do {                   
                primeFound = primes.some((prime) => {
                    j % prime == 0
                })

                j++
            } while (primeFound)
            primes.push(j)
}