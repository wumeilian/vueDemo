import test from './test.js';

function component() {
    let ele = document.createElement('div');
    ele.innerHTML = `hello webpack ${test}`;
    return ele;
}

document.body.appendChild(component());
