import _ from 'lodash';
import './style.css';

function componet() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!'];
    element.innerHTML = _.join(array, ' ');
    return element;
}

document.body.appendChild(componet());
document.body.classList.add('haikei');
