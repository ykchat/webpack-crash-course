import _ from 'lodash';
import { NiJou } from './utilities';
import { NAME as NAME_OF_HAM } from './utilities';
import Tiger from './utilities';

console.log(NiJou(3));
console.log(NAME_OF_HAM);
console.log(Tiger.say());

function componet() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!'];
    element.innerHTML = _.join(array, ' ');
    return element;
}

document.body.appendChild(componet());
