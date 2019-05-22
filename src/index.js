import _ from 'lodash';
import printMe from './print';
import './index.css';

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

document.body.appendChild(component());