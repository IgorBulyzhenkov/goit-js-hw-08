import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const LOCAL_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playTime, 1000));

function playTime({ seconds }) {
  localStorage.setItem(LOCAL_TIME, seconds);
}

const savedTime = localStorage.getItem(LOCAL_TIME);


if (savedTime) {
  player.setCurrentTime(savedTime);
}