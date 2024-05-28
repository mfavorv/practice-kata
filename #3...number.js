function solution(A) {
    let allDigits = [];
    let totalSum = 0;
    let aboveTen = [];
    let firstSum =0;
  
//Check for numbers with more than one digit
    for (let num of A) {
        if (num >= 10) {
            aboveTen.push(num);
        } else {
            allDigits.push(num);
        }
    }
//if there is only one number, the move is done twice on it
    if (aboveTen.length === 1) {
        let numString = aboveTen[0].toString();
        for (let digit of numString) {
            firstSum += parseInt(digit);
        }
        let firstSumStr = firstSum.toString();
        for(let int of firstSumStr){
            allDigits.push(parseInt(int));
        }
            
 //if the numbers are two, the move is done once for each number         
        }
     else if (aboveTen.length === 2) {
        for (let num of aboveTen) {
            let numString = num.toString();
            for (let digit of numString) {
                allDigits.push(parseInt(digit));
            }
        }
 //if the numbers are more than two, the move is only done on the first two numbers
    } else if (aboveTen.length > 2) {
        for (let i = 0; i < 2; i++) {
            let numString = aboveTen[i].toString();
            for (let digit of numString) {
                allDigits.push(parseInt(digit));
            }
        }
 // the remaining numbers are added as they are       
        for (let i = 2; i < aboveTen.length; i++) {
            allDigits.push(aboveTen[i]);
        }
    }

//add all the digits   
    for (let digit of allDigits) {
        totalSum += digit;
    }
  
    return totalSum; 
  }
  
 