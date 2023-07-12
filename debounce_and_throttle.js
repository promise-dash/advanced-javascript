//1 - Create a button UI and add debounce as follows:
        // * Show "Button" pressed <X> times evrythime button is pressed
        // * Increase "Triggered" <Y> times after 800ms of debounce

let d_clickCount = 0;
let d_triggerCount = 0;
const d_click = document.getElementById("d_clicked");
const d_trigger = document.getElementById("d_triggered");

const buttonPressHandler = () => {
    d_clickCount++;
    d_click.innerText = d_clickCount;
    debouncedEventHandler();
}

const eventHandler = () => {
    d_triggerCount++;
    d_trigger.innerText = d_triggerCount;
}

const debounce = (func, delay) => {
    let timer;
    
    return function (...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func(args);
        }, delay);
    }
}

const debouncedEventHandler = debounce(eventHandler, 500);

const d_button = document.querySelector(".d_button");
d_button.addEventListener('click', buttonPressHandler);


//2 - Create a button UI and add throttle as follows:
        // * Show "Button" pressed <X> times evrythime button is pressed
        // * Increase "Triggered" <Y> times after 800ms of debounce


let t_clickCount = 0;
let t_triggerCount = 0;
const t_click = document.getElementById("t_clicked");
const t_trigger = document.getElementById("t_triggered");

const handleButtonPress = () => {
    t_clickCount++;
    t_click.innerText = t_clickCount;
    throttledEventHandler();
}

const handleEvent = () => {
    t_triggerCount++;
    t_trigger.innerText = t_triggerCount;
}

const throttle = (func, duration) => {
    let lastTime = 0;
  
  return function(...args) {
    let currTime = new Date().getTime();
    if(currTime - lastTime < duration) return;
    lastTime = currTime;
    return func(args);
  };
}

const throttledEventHandler = throttle(handleEvent, 800);

const t_button = document.querySelector(".t_button");
t_button.addEventListener('click', handleButtonPress);

