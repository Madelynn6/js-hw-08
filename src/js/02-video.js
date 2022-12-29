import _ from 'lodash'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


const onSaveTimeUpdate = ({ seconds } = 0) => {
    localStorage.setItem("videoplayer-current-time", seconds)
};

const getVideoPlayerCurrentTime = () =>{
    return localStorage.getItem("videoplayer-current-time");
}

player.setCurrentTime(getVideoPlayerCurrentTime())

player.on("timeupdate", _.throttle(onSaveTimeUpdate, 1000));