import Vue from 'vue';
import App from './App.vue';
import {test} from './test.js';
import './main.scss';

function component() {
    let ele = document.createElement('div');
    ele.innerHTML = `<span>wml~ hello webpack ${test()}</span>`;
    return ele;
} 

document.body.appendChild(component());



asyncFn().then(e => {
    console.log(e, 'ans')
})

async function asyncFn() {
    console.log(11);
    let test = await asyncFn2(1, 2);
    console.log(333);
    return test * test;

}


function asyncFn2(x, y) {
    console.log(22);
    setTimeout(function() {
        console.log(44);
    }, 0)
    return x+y
}
// new Vue({
//     render: h => h(App)
// }).$mount('#app')

// if (module.hot) {
//    module.hot.accept('./test.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
//  }