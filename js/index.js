// song1
var s1=document.getElementById("song1");
const audioSrcOne="music/song1.mp3";
const audioOne=new Audio(audioSrcOne);

s1.addEventListener('click',function(){
    audioOne.play();
})

s1.addEventListener('dblclick',function(){
    audioOne.pause();
})



// song2
var s2=document.getElementById("song2");
const audioSrcTwo="music/song2.mp3";
const audioTwo=new Audio(audioSrcTwo);

s2.addEventListener('click',function(){
    audioTwo.play();
})

s2.addEventListener('dblclick',function(){
    audioTwo.pause();
})



// song3
var s3=document.getElementById("song3");
const audioSrcThree="music/song3.mp3";
const audioThree=new Audio(audioSrcThree);

s3.addEventListener('click',function(){
    audioThree.play();
})

s3.addEventListener('dblclick',function(){
    audioThree.pause();
})


// song4
var s4=document.getElementById("song4");
const audioSrcFour="music/song4.mp3";
const audioFour=new Audio(audioSrcFour);

s4.addEventListener('click',function(){
    audioFour.play();
})

s4.addEventListener('dblclick',function(){
    audioFour.pause();
})


//alert("asd");
