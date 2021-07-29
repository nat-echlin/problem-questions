const validate = input => {
    const listNum = input.toString().split('')
    const total = {
        even: 0,
        odd: 0
    }

    let digitCounter = 0
    listNum.forEach(element, index => {
        digitCounter++
        digit = element.toString()
        const incrementer = (double, notDouble) => {
            if (num * 2 >= 10) {
                total[double] += 1 + (num * 2) - 10
            } else {
                total[double] += num * 2
            }
            total[notDouble] += num
        }
        // end of fn


        if (index % 2 == 0) { // index is even

            // stuff here

        } else { // index is odd
            // do the same just switch around odd and even

            // stuff
        }
    })

    // digit counter shit
    // ...

}