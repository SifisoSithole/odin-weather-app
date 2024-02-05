import mainFunction from './components/main-app';

import './styles/style.css';

mainFunction();

let currentHour = new Date().getHours();

setInterval(() => {
    let newHour = new Date().getHours();
    if (newHour !== currentHour){
        mainFunction()
        currentHour = newHour;
    }
}, 60 * 1000);