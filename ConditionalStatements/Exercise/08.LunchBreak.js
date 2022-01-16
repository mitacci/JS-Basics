// 08. Lunch Break
function lunchBreak(input) {
    const nameSerial = input[0];
    const episodeTime = Number(input[1]);
    const breakTime = Number(input[2]);

    const time = breakTime - (breakTime / 8) - (breakTime / 4);

    const remainingTime = Math.abs(time);
    const freeTime = Math.abs(remainingTime - episodeTime);

    let yes = `You have enough time to watch ${nameSerial} and left with ${Math.ceil(freeTime)} minutes free time.`;
    let no = `You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(freeTime)} more minutes.`;
 
    if (remainingTime >= episodeTime) {
        console.log(yes);
    } else {
        console.log(no);
    }

}
