// 07. Shopping
function shopping(input) {
    const budget = Number(input[0]);
    const videoCardCount = Number(input[1]);
    const processorCount = Number(input[2]);
    const memoryCount = Number(input[3]);

    const videoCardPrice = 250 * videoCardCount;
    const processorPrice = videoCardPrice * 0.35 * processorCount;
    const memoryPrice = videoCardPrice * 0.1 * memoryCount;
    let totalCost = videoCardPrice + processorPrice + memoryPrice;

    if (videoCardCount > processorCount) {
        totalCost *= 0.85;
    }
    if (budget >= totalCost) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }

}
