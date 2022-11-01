function addIncreasing(n){

}

function addIncreasingR(n){

}

var reverseList = function(head) {
    let prev = null;
    let on = head;
    while (on !== null){
        let temp = on.next;
        on.next = prev;
        prev = on;
        on = temp;
    }
};

var reverseListR = function(on, prev = null){
    if(on === null) return prev;
    let temp = on.next;
    on.next = prev;
    return reverseListR(temp, on);
}