import _ from 'lodash';
import './style.css';
import './style.scss';
import logo from './logo.png';

function componet() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!'];
    element.innerHTML = _.join(array, ' ');
    return element;
}

function image() {
    const image = new Image();
    image.src = logo;
    return image;
}

document.body.appendChild(componet());
document.body.classList.add('haikei');
document.body.appendChild(image());
