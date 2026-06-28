function getMax(nums: number[]): number {
    let maxValue: number = nums[0]!;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i]! > maxValue) {
            maxValue = nums[i]!;
        }
    }

    return maxValue;
}

let nums = [1, 2, 3, 4, 5];
console.log(getMax(nums))