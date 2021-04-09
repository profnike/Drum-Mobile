/*let b=document.querySelectorAll('.butn');
b.forEach(butn => butn.addEventListener('click', playAudio/*removeTransition*/

/*document.querySelectorAll('.butn').addEventListener('click' , playAudio )
document.q*/
/*function playAudio(e){
    console.log(e);
   // for( let i=0; i>=0 && i<10 ;i++ ){
        //console.log(i);
        
    if( document.querySelector('audio[data-key="0"]')){
        document.getElementById("clap").play
        console.log("hi");
    }
    else if( document.querySelector('audio[data-key="1"]')){
        document.getElementById("snare").play
        console.log("go");
    }
   // let audio= document.getElementById('aud');
    au.play();
    
    //alert("hi");
//}
let au= document.querySelector('audio[data-key="i"]');
au.play();
alert("hi");
console.log(i);
};
*/
let c=document.getElementById("clap");
    c.addEventListener('click', clap);
function clap(e){
    console.log(e);
    let aud= document.querySelector('audio[data-key="0"]');
    aud.play();
}; 

let h=document.getElementById("hihat");
    h.addEventListener('click', hihat);
function hihat(e){
    console.log(e);
    let aud= document.querySelector('audio[data-key="1"]');
    aud.play();
};      
  
   let k=document.getElementById("kick");
    k.addEventListener('click', kick);
function kick(e){
    console.log(e);
    let audi= document.querySelector('audio[data-key="2"]');
    audi.play();
};  
let o=document.getElementById("openhat");
    o.addEventListener('click', openhat);
function openhat(e){
    console.log(e);
    let audio4= document.querySelector('audio[data-key="70"]');
    audio4.play();
    
}; 

let b=document.getElementById("boom");
    b.addEventListener('click', boom);
function boom(e){
    console.log(e);
    
    let audi05= document.querySelector('audio[data-key="71"]');
    audi05.play();
    
};



let r=document.getElementById("ride");
    r.addEventListener('click',ride);
function ride(e){
    console.log(e);
    let audio6= document.querySelector('audio[data-key="72"]');
    audio6.play();
};  

let s=document.getElementById("snare");
    s.addEventListener('click',snare);
function snare(e){
    console.log(e);
    let audio7= document.querySelector('audio[data-key="74"]');
    audio7.play();
};
let to=document.getElementById("tom");
    to.addEventListener('click',tom);
function tom(e){
    console.log(e);
    let audio8= document.querySelector('audio[data-key="75"]');
    audio8.play();
};  
let ti=document.getElementById("tink");
    ti.addEventListener('click',tink);
function tink(e){
    console.log(e);
    let audio9= document.querySelector('audio[data-key="76"]');
    audio9.play();
};    

    
    
    //alert("hi");




/*let audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key =   document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return ;// stops the function from running
audio.currentTime =0;//rewind to start

audio.play();
key.classList.add('playing');
};

//setTimeout (function(){


//}, 1)
function removeTransition(e){
    if (e.propertyName!== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}
let keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
*/
