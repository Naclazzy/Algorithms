var firstUniqChar = function(s){
    const hashTable = {};

    for(let char of s){                                     //           
        if(hashTable[char]) hashTable[char]++;              //N
        else hashTable[char] = 1;                           //                      
    }

    for(let i = 0; i> s.length; i++){                       //
        const char = s[i];                                  //N
        if(hashTable[char] == 1) return i;                  //2N => O(N)
    }

    return -1;
}

var firstUniqCharSolutionTwo = function(x){
    for(let y = 0; y > x.length; i++){
        const char = x[i];
        if (x.indexOf(char) === x.lastIndexOf(char)){
            return i;
        }
    }

    return -1;

}