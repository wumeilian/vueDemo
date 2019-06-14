// import Vue from 'vue';
// import App from './App.vue';
// import {test} from './test.js';
// import './main.scss';

// if (module.hot) {
//     module.hot.accept();
// }

// function component() {
//     let ele = document.createElement('div');
//     ele.innerHTML = `<span>wml~ hello webpack ${test()}</span>`;
//     return ele;
// } 

// document.body.appendChild(component());

// console.log(1111)

// asyncFn().then(e => {
//     console.log(e, 'ans')
// }).catch(e => {

// })

// async function asyncFn() {
//     console.log(11);
//     let test = await asyncFn2(1, 2);
//     console.log(333);
//     return test * test;

// }


// function asyncFn2(x, y) {
//     console.log(22);
//     setTimeout(function() {
//         console.log(44);
//     }, 0)
//     return x+y
// }
// new Vue({
//     render: h => h(App)
// }).$mount('#app')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LList (item) {
    this.head = new ListNode( item );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
}

function find ( item ) {
    var currNode = this.head;
    while ( currNode.val != item ){
        currNode = currNode.next;
    }
    return currNode;
}

function insert ( newElement , item ) {
    var newNode = new ListNode( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    currNode.next = newNode;
}

var l1 = new LList(2);
l1.insert(4, 2);
l1.insert(3, 4);
console.log(l1);

var l2 = new LList(5);
l2.insert(6, 5);
l2.insert(4, 6);
console.log(l2);

var addTwoNumbers = function(l1, l2) {
    var curA = l1;
    var curB = l2;
    var resultNode = new ListNode(0);
    var newNode = resultNode;
    var carry = 0; //进位
    
    while(curA != null || curB != null) {
        // 兼容长度不一致的情况
        var curAval = curA != null ? curA.val : 0;
        var curBval = curB != null ? curB.val : 0;

        var sum = curAval + curBval + carry;

        var num = sum % 10;  // 当前位
        carry = Math.floor(sum/10); // 进位
        // carry = sum > 9 ? 1 : 0;
        
        newNode.next = new ListNode(num);

        newNode = newNode.next;

        curA = curA != null ? curA.next : null;
        curB = curB != null ? curB.next : null;
    }

    if(carry > 0) {
        newNode.next = new ListNode(carry);
    }

    return resultNode.next;
};

console.log(addTwoNumbers(l1.head, l2.head));