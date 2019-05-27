import _ from 'lodash';
import printMe from './print';
import './index.css';
import { cube } from './math.js';

function component(){
    var element         = document.createElement('div');
    element.innerHTML   = _.join(['hello', 'word'], ' ');
    element.classList.add('color-red');
    element.classList.add('background');

    var button          = document.createElement('button');
    button.innerHTML    = "clickme";
    button.onclick      = printMe;
    element.appendChild(button);

    return element;
}

let element = component();
document.body.appendChild(element);

cube(12);

if(module.hot){
    module.hot.accept('./print', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}