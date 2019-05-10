import {test} from './test.js';
import './main.scss';

function component() {
    let ele = document.createElement('div');
    ele.innerHTML = `<span>wml~ hello webpack ${test()}</span>`;
    return ele;
} 

document.body.appendChild(component());

// if (module.hot) {
//    module.hot.accept('./test.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
//  }