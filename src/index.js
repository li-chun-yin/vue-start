import _ from 'lodash';
import './index.css';

function component(){
    var element         = document.createElement('div');
    element.innerHTML   = _.join(['hello', 'word'], ' ');
    element.classList.add('color-red');
    element.classList.add('background');
    return element;
}

document.body.appendChild(component());