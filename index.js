const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 31;
const total = batteryBatches.reduce((acc, item) => {
    return acc + item
}, totalBatteries)