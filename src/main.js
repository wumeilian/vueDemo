import {test} from './test.js';
import './main.scss';

function component() {
    let ele = document.createElement('div');
    ele.innerHTML = `<span>hello webpack ${test}</span>`;
    return ele;
} 

document.body.appendChild(component());
