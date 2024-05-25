function finalBalance(transactions, dates){
  let balance = 0;
  let card = 0;
  let incomingTransfer = 0;

  for(let amount of transactions){
    balance += amount
  }

  for (day of dates){
    dateNum = day.split("-");
    mth = parseInt(dateNum[1], 10)
    months.push(mth)
 }

 let duplicateIndexes = [];
 let singleIndex = [];
 for (let i = 0; i < months.length; i++) {
     for (let j = i + 1; j < months.length; j++) {
         if (months[i] === months[j]) {         
                 duplicateIndexes.push(i);
                 duplicateIndexes.push(j);
         } else{
                 singleIndex.push(i,j)
         }
     }
 }

 let initialBalance = 0;
 for(let index of duplicateIndexes){
   initialBalance += transactions[index]
 }

 let firstBal = 0;
 for(let index of duplicateIndexes){
  firstBal += transactions[index]
}

for(let index of duplicateIndexes){
 if(transactions[index] < 0){
  card++
 } else {
  incomingTransfer++
 }
}

let deduction = 0;
if(card > 2 && initialBalance >99 ){
  deduction = 55
}else if(card > 2 && initialBalance >99 && firstBal > 99){
  deduction = 50
}
else {
  deduction = 60
}

balance -= deduction;
return balance;
}
finalBalance(t[1, -1, 0, -105, 1], ["2020−12−31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"])
