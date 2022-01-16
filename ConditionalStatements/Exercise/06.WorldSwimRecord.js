// 06. World Swimming Record
function worldSwimmingRecord(input) {
    const record = Number(input[0]);
    const distance = Number(input[1]);
    const time = Number(input[2]);

    const totalTime = (distance * time + Math.floor(distance / 15) * 12.5);

    if (record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
