function finalBalance(transactions, dates) {
  let balance = 0;
  const monthlyPayments = {};
  const monthlyPaymentTotal = {};

 
  for (let i = 0; i < transactions.length; i++) {
    const amount = transactions[i];
    const dateStr = dates[i];
    const month = parseInt(dateStr.split("-")[1], 10);

    balance += amount;

    if (amount < 0) {
      if (!monthlyPayments[month]) {
        monthlyPayments[month] = 0;
        monthlyPaymentTotal[month] = 0;
      }
      monthlyPayments[month] += 1;
      monthlyPaymentTotal[month] += Math.abs(amount);
    }
  }


  for (let month = 1; month <= 12; month++) {
    if (monthlyPayments[month] >= 3 && monthlyPaymentTotal[month] >= 100) {
      continue;
    }
    balance -= 5;
  }

  return balance;
}


  finalBalance(
    [100, 100, 100, -10],
    ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"],
  )
   // Should return 230
