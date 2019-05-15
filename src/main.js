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

new Vue({
    render: h => h(App)
}).$mount('#app')

// if (module.hot) {
//    module.hot.accept('./test.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
//  }