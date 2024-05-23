function solution(A) {
    let times = 0;
    let allDigits = [];
    let totalSum = 0;
    let aboveTen = [];
    let firstChange = [];
    let firstSum = 0;

    // Splitting numbers into single and double digits
    for (let num of A) {
        if (num >= 10) {
            // Splitting the number into its digits and adding them individually
            aboveTen.push(num);
            if (aboveTen.length === 1 ) {
                while(times<2){
                times++;
                for (number in aboveTen) {
                    let numberString = number.toString();
                    for (n in numberString) {
                        firstChange.push(parseInt(n));
                    }
                }

                for (digits in firstChange){
                    firstSum += digits
                    allDigits.push(parseInt(digits));
                }
            }
            }else{        
                times++;
                 let numString = num.toString();
                 for (let digit of numString) {
                     allDigits.push(parseInt(digit));
                 }}


        } else {
            allDigits.push(num);
            console.log(allDigits);
        }
    }


    // Calculate sum of all digits
    for (let digit of allDigits) {
        totalSum += digit;
    }

    return totalSum; // Returning the total sum
}

// Example usage
console.log(solution([1, 10, 12, 3])); // Expected output: 8
console.log(solution([2, 29, 3])); // Expected output: 7
console.log(solution([100, 101, 102, 103])); // Expected output: 208
console.log(solution([55])); // Expected output: 1