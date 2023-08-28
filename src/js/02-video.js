import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = "videoplayer-current-time";
    
   
player.on('timeupdate', throttle(onPlay, 1000));

    
function onPlay (data) {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(data.seconds)); 
    };
     
const localStorageValue = localStorage.getItem(LOCAL_KEY);
const parsedLocalStorageValue = JSON.parse(localStorageValue);
    
player.setCurrentTime(parsedLocalStorageValue || 0);