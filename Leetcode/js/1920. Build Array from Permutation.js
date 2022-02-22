var buildArray = function(nums) {
    let res = [];
    for (let i in nums)
        res[i] = nums[nums[i]];
    return res;
};
