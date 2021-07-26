// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const ans = `

For q5 I didn't want to use node, as it's not the fastest at brute force math, and there's not too much optimisation that could 
be done to an algorithm.

However you can do this with pen and paper, a method called prime factor decomposition (PFD).

01 = 1^1
02 =     2^1
03 =         3^1
04 =     2^2
05 =             5^1
06 =     2^1 3^1
07 =                 7^1
08 =     2^3
09 =         3^2
10 =     2^1     5^1
11 =                     11^1
12 =     2^2 3^1
13 =                          13^1
14 =     2^1         7^1
15 =         3^1 5^1
16 =     2^4
17 =                               17^1
18 =     2^1 3^2
19 =                                    19^1
20 =     2^2     5^1

This is the PFD of each number 1 through 20.

Now, I find the highest power present, on each prime. For two, you can see that 16 = 2^4 so my highest power would be 4.

I now do this for each one:

1^1 2^4 3^2 5^1 7^1 11^1 13^1 17^1 19^1

And multiple these together:

(1^1) * (2^4) * (3^2) * (5^1) * (7^1) * (11^1) * (13^1) * (17^1) * (19^1) = 232,792,560



`