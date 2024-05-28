function fullRounds(A, B) {
    let rounds = 0;
    let [hoursA, minutesA] = A.split(":").map(Number);
    let [hoursB, minutesB] = B.split(":").map(Number);

    // Convert hours and minutes to total minutes from start of the day
    let totalMinutesA = hoursA * 60 + minutesA;
    let totalMinutesB = hoursB * 60 + minutesB;

    // Check if the end time is on the next day
    if (totalMinutesB < totalMinutesA) {
        totalMinutesB += 24 * 60; // Add 24 hours worth of minutes
    }else if(totalMinutesA == totalMinutesB){
         rounds = 0;
    }
    // Calculate the number of full 15-minute rounds
    if(totalMinutesA !== totalMinutesB){
        let roundsStart = Math.ceil(totalMinutesA / 15);
        let roundsEnd = Math.floor(totalMinutesB / 15);
         rounds = roundsEnd - roundsStart;
    }

    console.log(`The number of rounds between ${A} and ${B} is ${rounds} rounds.`);

    return rounds;
}

console.log(fullRounds("12:01", "12:44")); // Expected output: 1
console.log(fullRounds("20:00", "06:00")); // Expected output: 40
console.log(fullRounds("00:00", "23:59")); // Expected output: 95
console.log(fullRounds("12:03", "12:03")); // Expected output: 0
