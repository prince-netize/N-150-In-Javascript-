const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const second = target - first;

        if (map.has(second)) {
            return [map.get(second), i];
        }

        map.set(first, i);
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));  //Example 