import { APP_NAME, hello, Figure} from './myutil';
console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(10, 5));
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    console.log('！！開発モードで動作中！！');
}
import './style.css';
let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');