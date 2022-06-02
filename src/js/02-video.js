const throttle = require("lodash.throttle");
const LOCAL_TIME = 'videoplayer-current-time';


let iframe = document.querySelector('iframe');
let player = new Vimeo.Player(iframe);

console.log(player);

player.on('timeupdate', throttle(playTime,1000));

function playTime({seconds}) {
    console.log('played the video!');
    localStorage.setItem(LOCAL_TIME, seconds)

}

const savedTime = localStorage.getItem(LOCAL_TIME);


player.setCurrentTime(savedTime);