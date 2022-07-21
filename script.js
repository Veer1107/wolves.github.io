const musicContainer=document.querySelector('.music-container');
const playBtn=document.querySelector('#play');
const prevBtn=document.querySelector('#prev');
const nextBtn=document.querySelector('#next');
const audio=document.querySelector('#audio');
const progressContainer=document.querySelector('.progress-container');
const progress=document.querySelector('.progress');
const title=document.querySelector('#title');
const cover=document.querySelector('#cover');
const imageInContents=document.querySelector('.contents .one .box img');

const TitleInContents=document.querySelector('.contents .one .box h4');
const contents=document.querySelector('.contents');
const textarea=document.querySelector('.twoboxes .text-area textarea');

//song titles
const songs=['wolves','itaintme','fireflies','paris','photograph'];



//Insertsongsintocontents


   
//keep track of songs




//update song details
function loadSong(song){
    title.innerText=song;
    audio.src=`music/${song}.mp3`;
    cover.src=`images/${song}.jpg`;
  
audio.play();

}
//playsong
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
    

}
//pauseSong
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}
//previous Song
function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
//next Song
function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
//progress bar function
function updateProgress(e){
    const{duration,currentTime}=e.srcElement;
    const progressPercent=(currentTime/duration)*100;
    progress.style.width=`${progressPercent}%`;
}
//function set progress

function setProgress(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration=audio.duration;
    audio.currentTime=(clickX / width) * duration;
}


//Event Listener for playing and pausing song
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})
//Events for previous and next song

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);


//event for progress
audio.addEventListener('timeupdate',updateProgress);

//set progress
progressContainer.addEventListener('click',setProgress);

//endsong
audio.addEventListener('ended',nextSong);
console.log(songinContent);

//lines
const onethinglines="This has to be my favorite. You took me and Vivek to an internet cafe and made us watch the video of this song. But we were so dumb that we didn't know PCs in the cafe doesn't have speakers and we did not have earphones either. So we watched this on mute.Oh god I can even hear you singing this song and it sounds so cool.<br>Have sunflower days<br><br> xoxo <br> V ";
const photographlines="In one of your early letters, you were angry and very broken by someone. Someone came into your life and planted sunflowers in your heart and soon they chopped them off. And you asked me what ed meant by these lines? Since that day all of my letters ended with these lines. <br> And if you hurt me , thats okay baby <br>only words bleed<br>inside the pages you just hold me<br>I won't ever let you go<br>wait for me to come home <br>Have sunflower days<br> <br> xoxo <br> V <br>        ";




















