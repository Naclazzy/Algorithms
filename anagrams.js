var groupAnagrams = function (strs){
    const ht = {};
    for(let str of strs){
        const sorted = str.split('').sort().join(''); // sort => m log m * by outer loop n 
        //'abc' -> ['a','b','c'].sort() -> .join() -> 'abc' => Method Chaining 

        if(ht[sorted]) ht[sorted].push(str);
        else ht[sorted] = [str]
    }
    return Object.values(ht);
}

