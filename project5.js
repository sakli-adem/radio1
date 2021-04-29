


//class buttons
class audio_player{
    constructor(){
this.audiofile=document.getElementById("audiofile")
this.title_audio=document.getElementById("titleradio")
this.play_pause_button=document.getElementById("play_pause")
this.isplayed=true
this.play_pause_button.addEventListener("click",()=>{
this.play_pause()
});

this.play_pause()
this.names_radio=[];
this.names_radio[0]="Jawhara FM";
this.names_radio[1]="Mosaique FM";
this.names_radio[2]="IFM";
this.names_radio[3]="Shems FM";
this.names_radio[4]="Knooz FM";
this.names_radio[5]="Zitouna FM";
this.names_radio[6]="Tunis Nationale";
this.names_radio[7]="Express FM";
this.names_radio[8]="Sfax FM";
this.names_radio[9]="Sabra FM";
this.names_radio[10]="Diwan FM";
this.names_radio[11]="Cap FM";
this.names_radio[12]="Jeune FM";
this.names_radio[13]="Monastir FM";
this.names_radio[14]="Qurant FM";
this.names_radio[15]="Panorama FM";
this.names_radio[16]="Radio Kef";
this.names_radio[17]="Radio Gafsa";
this.names_radio[18]="Radio Culture";
this.names_radio[19]="Misk FM";
this.names_radio[20]="Radio Kelma FM";
this.names_radio[21]="Ribat FM";
this.names_radio[22]="Nejma FM";
this.names_radio[23]="Karama FM";
this.names_radio[24]="Mouja FM";
this.names_radio[25]="Msaken FM";
this.names_radio[26]="Med FM";


this.image=[]
this.image[0]="jaw.jpg"
this.image[1]="mos.png"
this.image[2]="ifm.png"
this.image[3]="cha.jpg"
this.image[4]="kn.png"
this.image[5]="zit.png"
this.image[6]="tn.png"
this.image[7]="ex.png"
this.image[8]="sfaxpng.jpg"
this.image[9]="sabra.png"
this.image[10]="diwan.png"
this.image[11]="cap.png"
this.image[12]="jeune.png"
this.image[13]="monastir.png"
this.image[14]="qurant.png"
this.image[15]="panorama.png"
this.image[16]="kef.png"
this.image[17]="gafsa.png"
this.image[18]="culture.png"
this.image[19]="misk.png"
this.image[20]="kelma.png"
this.image[21]="ribat.png"
this.image[22]="Nejma.png"
this.image[23]="karama.png"
this.image[24]="mouja.png"
this.image[25]="msaken.png"
this.image[26]="med.png"



this.source_audio=[]
this.source_audio[0]="https://streaming2.toutech.net/jawharafm";
this.source_audio[1]="https://radio.mosaiquefm.net/mosalive";
this.source_audio[2]="https://live.ifm.tn/radio/8000/ifmlive?1585267848";
this.source_audio[3]="https://stream6.tanitweb.com/shems";
this.source_audio[4]="http://streaming.knoozfm.net:8000/knoozfm";
this.source_audio[5]="https://zitounafm.toutech.net/zitounalive";
this.source_audio[6]="http://rtstream.tanitweb.com/nationale";
this.source_audio[7]="https://expressfm.ice.infomaniak.ch/expressfm-64.mp3";
this.source_audio[8]="http://rtstream.tanitweb.com/sfax";
this.source_audio[9]="https://stream6.tanitweb.com/sabrafm";
this.source_audio[10]="https://stream6.tanitweb.com/diwanfm";
this.source_audio[11]="https://stream.beta-systemes.com:8443/capfm";
this.source_audio[12]="http://rtstream.tanitweb.com/jeunes";
this.source_audio[13]="http://rtstream.tanitweb.com/monastir";
this.source_audio[14]="http://5.135.194.225:8000/live";
this.source_audio[15]="https://stream.tun-radio.com/radio/8000/panorama_tunis";
this.source_audio[16]="http://rtstream.tanitweb.com/kef";
this.source_audio[17]="http://rtstream.tanitweb.com/gafsa";
this.source_audio[18]="http://rtstream.tanitweb.com/culturelle";
this.source_audio[19]="http://live.misk.tn:8000/stream";
this.source_audio[20]="http://mdigital.agency:8000/radiokelma";
this.source_audio[21]="http://streaming.ribatfm.tn:8000/live";
this.source_audio[22]="http://188.166.109.186:8000/stream";
this.source_audio[23]="http://serveur.wanastream.com:64900/;";
this.source_audio[24]="http://expressfm.ice.infomaniak.ch/expressfm-64.mp3";
this.source_audio[25]="https://stream.rm-fm.net/live";
this.source_audio[26]="https://stream6.tanitweb.com/radiomed";



this.server=0
this.setResource()

document.getElementById("next").addEventListener("click",()=>{
    if(this.server<this.source_audio.length-1){
        ++this.server
    }else{
        this.server=0
    }
    this.setResource()
    this.play_pause_button.src="pause.png"
    this.audiofile.play()
 
})
document.getElementById("back").addEventListener("click",()=>{ 
    if(this.server>0){
        --this.server   
    }else{
        this.server=this.source_audio.length-1
    }
    this.setResource()
    this.play_pause_button.src="pause.png"
    this.audiofile.play()
})
}

setResource(){
    this.audiofile.src=this.source_audio[this.server]
    this.title_audio.innerHTML=this.names_radio[this.server]
    document.imag.src=this.image[this.server]
}

play_pause(){
    if(this.isplayed==false){
        this.play_pause_button.src="pause.png"
        this.audiofile.play()
        this.isplayed=true
    }else{
        this.audiofile.pause()
        this.isplayed=false
        this.play_pause_button.src="play.png"
    }
}
}
onload=new audio_player


class volume{
    constructor(){
        this.vall=document.getElementById("valeur")
        this.vall1=document.getElementById("valeur1")
        this.audio_file=document.getElementById("audiofile")
        this.audio_file.volume=50/100
        this.vol=document.getElementById("vol")

        this.vol.addEventListener("change",()=>{
            this.audio_file.volume=this.vol.value/100
            this.vall.innerHTML= parseInt(this.vol.value)+"%"
        });
      var speed = document.getElementById("vitesse");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
         this.vall1.innerHTML= parseInt(speed.value)+"%"
        });
        
    }
}
onload=new volume()

function deft(){
    this.vall=document.getElementById("valeur")
    this.vall1=document.getElementById("valeur1")

    volume1=document.getElementById("vol")
        volume1.value=50
        this.audio_file=document.getElementById("audiofile")
        this.audio_file.volume=50/100
        this.vall.innerHTML="50%"


        speed1=document.getElementById("vitesse")
        speed1.value=100
        this.audio_file=document.getElementById("audiofile")
        this.audio_file.playbackRate=1
        this.vall1.innerHTML="100%"

    }
function backgroundcolor(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to top,yellow,green,yellow)"
    
}
function backgroundcolor1(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to top,rgb(56, 255, 6),rgb(189, 131, 131),white)"
    //c2=document.getElementById("h22")
    //c2.style.color="white"
}
function backgroundcolor2(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to top,rgb(6, 187, 219),rgb(250, 37, 239),yellow)"
}
function backgroundcolor3(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to left,rgb(14, 250, 250),rgb(240, 24, 204))";
}
function backgroundcolor4(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to top,yellow,green,white)"
}
function backgroundcolor5(){
    c1=document.getElementById("content")
    c1.style.background="linear-gradient(to top,rgb(214, 107, 20),rgb(234, 245, 245),orange)"
}
function backgroundcolor6(){
    c1=document.getElementById("content")
    c1.style.background= "rgb(70, 194, 194)";
}
function backgroundcolor7(){
    c1=document.getElementById("content")
    c1.style.background= "white";

}




function setr() {
    x=document.getElementById("audiofile")
    x.src="https://streaming2.toutech.net/jawharafm"
    x.play()
    v=document.getElementById("im")
    v.src="jaw.jpg"
    w=document.getElementById("titleradio")
    w.innerHTML="Jawhara FM"
    m=document.getElementById("play_pause")
    m.src="pause.png"
 
}

function setr1() {
    x=document.getElementById("audiofile")
    x.src="https://radio.mosaiquefm.net/mosalive"
    x.play()
    v=document.getElementById("im")
    v.src="mos.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Mosaique FM"
}

function setr2() {
    x=document.getElementById("audiofile")
    x.src="https://live.ifm.tn/radio/8000/ifmlive?1585267848"
    x.play()
    v=document.getElementById("im")
    v.src="ifm.png"
    w=document.getElementById("titleradio")
    w.innerHTML="IFM"
}

function setr3() {
    x=document.getElementById("audiofile")
    x.src="https://stream6.tanitweb.com/shems"
    x.play()
    v=document.getElementById("im")
    v.src="cha.jpg"
    w=document.getElementById("titleradio")
    w.innerHTML="Shems FM"
}

function setr4() {
    x=document.getElementById("audiofile")
    x.src="http://streaming.knoozfm.net:8000/knoozfm"
    x.play()
    v=document.getElementById("im")
    v.src="kn.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Knooz FM"
}


function setr5() {
    x=document.getElementById("audiofile")
    x.src="https://zitounafm.toutech.net/zitounalive"
    x.play()
    v=document.getElementById("im")
    v.src="zit.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Zitouna FM"
}





function setr6() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/nationale"
    x.play()
    v=document.getElementById("im")
    v.src="tn.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Tunis Nationale"
}

function setr7() {
    x=document.getElementById("audiofile")
    x.src="https://expressfm.ice.infomaniak.ch/expressfm-64.mp3"
    x.play()
    v=document.getElementById("im")
    v.src="ex.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Express FM"
}

function setr8() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/sfax"
    x.play()
    v=document.getElementById("im")
    v.src="sfaxpng.jpg"
    w=document.getElementById("titleradio")
    w.innerHTML="Sfax FM"
}

function setr9() {
    x=document.getElementById("audiofile")
    x.src="https://stream6.tanitweb.com/sabrafm"
    x.play()
    v=document.getElementById("im")
    v.src="sabra.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Sabra FM"
}



function setr10() {
    x=document.getElementById("audiofile")
    x.src="https://stream6.tanitweb.com/diwanfm";
    x.play()
    v=document.getElementById("im")
    v.src="diwan.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Diwan FM"
}

function setr11() {
    x=document.getElementById("audiofile")
    x.src="https://stream.beta-systemes.com:8443/capfm";
    x.play()
    v=document.getElementById("im")
    v.src="cap.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Cap FM"
    alert("Cap FM ne fonctionne pas pour le moment")
}

function setr12() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/jeunes";
    x.play()
    v=document.getElementById("im")
    v.src="jeune.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Jeunes FM"
}

function setr13() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/monastir"
    x.play()
    v=document.getElementById("im")
    v.src="monastir.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Monastir FM"
}







function setr14() {
    x=document.getElementById("audiofile")
    x.src="http://5.135.194.225:8000/live";
    x.play()
    v=document.getElementById("im")
    v.src="Qurant.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Qurant FM"
}
function setr15() {
    x=document.getElementById("audiofile")
    x.src="https://stream.tun-radio.com/radio/8000/panorama_tunis"
    x.play()
    v=document.getElementById("im")
    v.src="panorama.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Panorama FM"
    alert("Panorama FM ne fonctionne pas pour le moment")
}


function setr16() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/kef";
    x.play()
    v=document.getElementById("im")
    v.src="kef.png"
    w=document.getElementById("titleradio")
    w.innerHTML=" Radio Kef"
}


this.source_audio[20]="http://mdigital.agency:8000/radiokelma";
this.source_audio[21]="http://streaming.ribatfm.tn:8000/live";
this.source_audio[22]="http://188.166.109.186:8000/stream";

function setr17() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/gafsa";
    x.play()
    v=document.getElementById("im")
    v.src="gafsa.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Radio Gafsa"
}
function setr18() {
    x=document.getElementById("audiofile")
    x.src="http://rtstream.tanitweb.com/culturelle";
    x.play()
    v=document.getElementById("im")
    v.src="culture.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Radio Culture"
}
function setr19() {
    x=document.getElementById("audiofile")
    x.src="http://live.misk.tn:8000/stream";
    x.play()
    v=document.getElementById("im")
    v.src="misk.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Misk FM"
}
function setr20() {
    x=document.getElementById("audiofile")
    x.src="http://mdigital.agency:8000/radiokelma"
    x.play()
    v=document.getElementById("im")
    v.src="kelma.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Kelma FM"
}
function setr21() {
    x=document.getElementById("audiofile")
    x.src="http://streaming.ribatfm.tn:8000/live";
    x.play()
    v=document.getElementById("im")
    v.src="ribat.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Ribat FM"
    alert("Ribat FM ne fonctionne pas pour le moment")
}


function setr22() {
    x=document.getElementById("audiofile")
    x.src="http://188.166.109.186:8000/stream";
    x.play()
    v=document.getElementById("im")
    v.src="nejma.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Nejma FM"
}
function setr23() {
    x=document.getElementById("audiofile")
    x.src="http://serveur.wanastream.com:64900/;";
    x.play()
    v=document.getElementById("im")
    v.src="karama.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Karama FM"
}
function setr24() {
    x=document.getElementById("audiofile")
    x.src="http://expressfm.ice.infomaniak.ch/expressfm-64.mp3";
    x.play()
    v=document.getElementById("im")
    v.src="mouja.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Mouja FM"
}


function setr25() {
    x=document.getElementById("audiofile")
    x.src="https://stream.rm-fm.net/live";
    x.play()
    v=document.getElementById("im")
    v.src="msaken.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Msaken FM"
}

function setr26() {
    x=document.getElementById("audiofile")
    x.src="https://stream6.tanitweb.com/radiomed";
    x.play()
    v=document.getElementById("im")
    v.src="med.png"
    w=document.getElementById("titleradio")
    w.innerHTML="Med FM"
}


function ln() {//light mode
    var x= document.getElementById("backa")
    var y=document.getElementById("social1") //night
    var z=document.getElementById("social2") //light
    var p=document.getElementById("liste")
    var i=document.getElementById("liste2")
    var f=document.getElementById("fre")
    var r=document.getElementById("player")
    var ll=document.getElementById("copu1")
    ll.style.color="black"
    p.style.background="white"
    i.style.background="white"
    r.style.border="10px solid white"
    r.style.borderRadius="30px"

    x.style.background="black"
   y.style.display="none"
   z.style.display="inline"
    y.style.background="white"
    z.style.background="white"


    p.style.background="black"
    p.style.color="white"
    p.style.border="5px solid white"
    p.style.borderRadius="15px"
    i.style.border="5px solid white"
    p.style.borderRadius="15px"
    i.style.borderRadius="15px"
    i.style.background="black"
    i.style.color="white"
    f.style.background="black"


}
function ln2() { //night mode
    var y=document.getElementById("social1") //night
    var z=document.getElementById("social2") //light
    var x= document.getElementById("backa")
    var p=document.getElementById("liste")
    var i=document.getElementById("liste2")
    var f=document.getElementById("fre")
    var r=document.getElementById("player")
   
    r.style.border="10px solid black"
    x.style.background="white"
    y.style.display="inline"
    z.style.display="none"
    y.style.background="white"
    z.style.background="white"
    p.style.background="rgb(196, 238, 255)" 
    p.style.color="black"
    i.style.background="rgb(196, 238, 255)" 
    i.style.color="black"
    f.style.background="rgb(196, 238, 255)" 
   
}
function befor(){
                return"";
            }
    
   
