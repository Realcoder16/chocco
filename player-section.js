let player;
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").click(e => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")) {
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playerContainer.addClass("paused");
      player.playVideo();
    }
  });
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'jkivI_DiDlo',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
    PlayerVars: {
      controls: 0,
      disablekb: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 0,
      modestbranding: 0

    }
  });
}


var widthWind = document.querySelector('body').offsetWidth;
if (widthWind < 768) {

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      height: '295',
      width: '460',
      videoId: 'jkivI_DiDlo',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      },
      PlayerVars: {
        controls: 0,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        autoplay: 0,
        modestbranding: 0

      }
    });
  }
}

var widthWind = document.querySelector('body').offsetWidth;
if (widthWind < 480) {

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      height: '190',
      width: '310',
      videoId: 'jkivI_DiDlo',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      },
      PlayerVars: {
        controls: 0,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        autoplay: 0,
        modestbranding: 0

      }
    });
  }

}


eventsInit();