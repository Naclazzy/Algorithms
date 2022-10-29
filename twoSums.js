var twoSum = function(nums, target) { 
    // for(let i=0; i< nums.length; i++){
    //     const num = nums[i];
    //     const want = target - num;
    //     for(j = i+1; j < nums.length; j++){
    //         if(nums[j] === want) return[i, j]
    //     }
    // } 
    const ht = {};
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const want = target - num;
        if(want in ht){
            const leftIndex = ht[want];
            return [leftIndex,i]
        }else {
            return ht[num] = i;
        }
    }

};