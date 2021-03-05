// Implementation of stack (using linked list) ?



class Node{
    

    constructor(val){
        this.val=val;
        this.next=null;

    }

}

let head=null;
let tail=null;

const push=(val)=>{
    let nn=new Node(val);
    if(head==null){
        head=nn;
        tail=nn;
    }else{
        nn.next=head;
        head=nn;
    }
    return;
}



const length=()=>{
    let temp=head;
    let count=0;
    while(temp!=null){
        temp=temp.next;
        count++;
    }
    return count;
}

const peek=()=>{
    if(head==null) return -1;
    return head.val;
}

const remove=()=>{
    if(head==null)return -1;
    let del=head.val;
    head=head.next;
    console.log(del +" deleted");

}


push(5);
push(7);
push(8);
push(14);


console.log(peek());
remove();
console.log(peek());
remove();
console.log(peek());
remove();
console.log(peek());
remove();

console.log(length());