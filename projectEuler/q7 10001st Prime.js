// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?


nthPrime = n => {
    let primes = [2]
    
    while(primes.length < n) {
        let i = primes[primes.length - 1] + 1
        do {                   
            primeFound = primes.some((prime) => {
                return i % prime == 0
            })

            i++
        } while (primeFound)
        
        primes.push(i - 1)
       
    }

    return primes[primes.length - 1]
}



console.log(nthPrime(10001))

// returns 104743 : correct