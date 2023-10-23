
// let songIndex = 0;

// let audioElement = new Audio('1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let songItems = Array.from(document.getElementsByClassName('songitem'));


// let songs = [
//     {
//         songName: "Softly - Karan Aujla !",
//         filePath: "1.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     },
//     {
//         songName: "Bachke Bachke - Karan Aujla !",
//         filePath: "2.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     },   
//     {
//         songName: "Jhanjar - Karan Aujla !",
//         filePath: "3.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     },
//     {
//         songName: "Try Me - Karan Aujla !",
//         filePath: "4.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     },
//     {
//         songName: "Take It Easy - Karan Aujla !",
//         filePath: "5.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     },
//     {
//         songName: "Here & There - Karan Aujla !",
//         filePath: "6.mp3",
//         coverPath: "images/channels4_profile.jpg"
//     }
// ];
// songItems.forEach((element, i)=>{
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//     });
// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//     }
// });

// audioElement.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
//     let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     console.log(progress);
//     myProgressBar.value = progress;
// });
// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// });

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     });
// };

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//     });
// });

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         let index = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `${index}.mp3`; // Added backticks for string interpolation
//         audioElement.currentTime = 0;
//         audioElement.play();
//         mas.classList.remove('fa-play-circle'); // Fixed single quotes
//         masterPlay.classList.add('fa-pause-circle'); // Fixed single quotes
//     });
// });


let songIndex = 0;

let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {
        songName: "Softly - Karan Aujla !",
        filePath: "1.mp3",
        coverPath: "images/channels4_profile.jpg"
    },
    {
        songName: "Bachke Bachke - Karan Aujla !",
        filePath: "2.mp3",
        coverPath: "images/channels4_profile.jpg"
    },   
    {
        songName: "Jhanjar - Karan Aujla !",
        filePath: "3.mp3",
        coverPath: "images/channels4_profile.jpg"
    },
    {
        songName: "Try Me - Karan Aujla !",
        filePath: "4.mp3",
        coverPath: "images/channels4_profile.jpg"
    },
    {
        songName: "Take It Easy - Karan Aujla !",
        filePath: "5.mp3",
        coverPath: "images/channels4_profile.jpg"
    },
    {
        songName: "Here & There - Karan Aujla !",
        filePath: "6.mp3",
        coverPath: "images/channels4_profile.jpg"
    }
];
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        let index = parseInt(e.target.id);
        audioElement.src = `${index}.mp3`;;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});