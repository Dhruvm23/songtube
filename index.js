console.log("hello");
//variable initialise
let songIndex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogessbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"What Jhumka?",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Tu Hai",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Gur Naal Ishq Mitha",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"Paris Ka Trip",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"Nacho Nacho",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"Muskurane",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName:"Jhoome Jo Pathaan",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName:"Black and White",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    //{songName:"i",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    //{songName:"j",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
]
songitems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

//Handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }

})
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogessbar.value=progress;

})
myprogessbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogessbar.value * audioelement.duration/100;
})
//Make all button play when this function is called
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        gif.style.opacity=0;

    })


}
//Make play button pause when the list song are clicked
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioelement.src= `songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;

        audioelement.src= `songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    }

    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;

        audioelement.src= `songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    }
})

    