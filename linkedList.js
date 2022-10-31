//ES6
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;    
    }
}
 
const node = new ListNode(1);
node.next = new ListNode(2);

const head = new ListNode(0);
head.next = node;

//ES5
function Es5ListNode(value){
    this.value = value;
    this.next = null; 
}

const node = new ListNode(3);