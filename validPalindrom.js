
// naive Solution
// var isPalindrome = function(s){
//     const san = s.replace(/[^\w_]/gi, '').replaceAll('_',"").toLowerCase();
//   return san.split('').reverse().join('') === san;
//  }

//Pointer Method 
var isPalindrome = function(s){
    const san = s.replace(/[^\w_]/gi, '').replaceAll('_',"").toLowerCase();
    let left = 0; 
    let right = san.length - 1;
    while(left < right){
        if(san[left] !== san[right]) return false;
        left++;
        right--;
    } 
    return true;

}
