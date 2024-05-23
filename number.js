function solution(A) {
    let allDigits = [];
    let totalSum = 0;
    let aboveTen = [];
    let firstSum =0;
  
  
    for (let num of A) {
        if (num >= 10) {
            aboveTen.push(num);
        } else {
            allDigits.push(num);
        }
    }
  
    if (aboveTen.length === 1) {
        let numString = aboveTen[0].toString();
        for (let digit of numString) {
            firstSum += parseInt(digit);
        }
        let firstSumStr = firstSum.toString();
        for(let int of firstSumStr){
            allDigits.push(parseInt(int));
        }
            
          
        }
     else if (aboveTen.length === 2) {
        for (let num of aboveTen) {
            let numString = num.toString();
            for (let digit of numString) {
                allDigits.push(parseInt(digit));
            }
        }
    } else if (aboveTen.length > 2) {
        for (let i = 0; i < 2; i++) {
            let numString = aboveTen[i].toString();
            for (let digit of numString) {
                allDigits.push(parseInt(digit));
            }
        }
        for (let i = 2; i < aboveTen.length; i++) {
            allDigits.push(aboveTen[i]);
        }
    }
  
    for (let digit of allDigits) {
        totalSum += digit;
    }
  
    return totalSum; 
  }
  
 