// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

sumPrimes = upToN => {
    let primes = [2]
    let sum = 2

    while(primes[primes.length - 1] < upToN) {
        let i = primes[primes.length - 1] + 1
        do {                   
            primeFound = primes.some((prime) => {
                return i % prime == 0
            })

            i++
        } while (primeFound)
        
        primes.push(i - 1)
        sum += i - 1
    }
    return sum - primes[primes.length - 1]
}

console.log(sumPrimes(2000000))

// returns 142913828922 : correct