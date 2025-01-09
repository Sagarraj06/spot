console.log("Welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName("songItem"));
let mastersongname=document.getElementById('mastersongname');


let songs = [
    
    {songName: "Warriyo-mortals(feat.laura Brehm)",filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Cielo - Huma-Huma",filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "DEAF KEV-Invinvible",filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Different Heaven & EH!DE",filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Sjanji-Heroes-Tonight-Feat-Johnning",filePath: "5.mp3", coverPath: "5.jpg"},
    
    
]
songItems.forEach((element, i)=>{ 
    

    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// handle play pause click

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-click');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-click');
        gif.style.opacity=0;
}})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay ')).forEach((element) => {
    element.addEventListener('click' , (e)=>{
    makeAllplay();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-click');
    masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 4;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-click');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-click');
    masterplay.classList.add('fa-pause-circle');
})