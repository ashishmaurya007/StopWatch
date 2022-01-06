window.onload = function(){
    var min= 00;
    var sec= 00;
    var tens=00;
    let lapcount=1;
    var interval;
    // import tags

    var appendTens=document.getElementById("tens");
    var appendSec= document.getElementById("sec");
    var appendMin= document.getElementById("min");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var btnReset = document.getElementById("btnReset");
    var laps= document.getElementById("laps");
    var btnClear=document.getElementById("clearLap");


    btnStart.style.backgroundColor = "lightgreen";
    // functionality to start button 
    btnStart.onclick =function(){  
        if(btnStart.innerHTML=="Lap"){ 
            if(lapcount>=10){
                btnStart.disabled= true;
                alert("You reached to maximum lap count");
                btnStart.innerHTML="Start";
            }  
            if(lapcount<=10){        
                const lap = document.createElement("div");
                lap.innerText = "#"+lapcount+": "+min + " : " + sec + " : " + tens;
                laps.appendChild(lap);
                lapcount++;
            }

        }
        btnStop.style.visibility="visible";
        btnStop.style.backgroundColor = "red";
        btnClear.style.visibility="visible";
        clearInterval(interval);
        interval= setInterval(startTimer,10);
        btnStart.innerHTML="Lap";
    }
    // functionality to claer laps 
    btnClear.onclick= function(){
        laps.innerHTML = " ";
        btnClear.style.visibility="hidden";
        lapcount=1;
        btnStart.disabled= false;
        
    }
//    functionality to stop watch 
    btnStop.onclick =function(){
        btnStart.innerHTML="Start";
        btnStart.disabled= false;
        btnReset.style.visibility="visible";
        clearInterval(interval);
        
    }
    // functionality to reset all 
    btnReset.onclick = function(){
        laps.innerHTML = " ";
        btnStart.disabled= false;
        btnStart.innerHTML="Start";
        clearInterval(interval);
        tens="00";
        sec="00";
        min ="00";
        appendTens.innerHTML=tens;
        appendSec.innerHTML=sec;
        appendMin.innerHTML=min;
        btnReset.style.visibility="hidden";
        btnStop.style.visibility="hidden";
        btnClear.style.visibility="hidden";
        lapcount=1;
    }
    // function that work behind the time increament
    function startTimer(){
        tens++;
        if(tens <=9){
            appendTens.innerHTML="0"+tens;
        }
        if(tens> 9){
            appendTens.innerHTML=tens;
        }
        if(tens > 99){
            sec++;
            appendSec.innerHTML="0"+ sec;
            tens=0;
            appendTens.innerHTML="0"+0;
        }
        if(sec >9){
            appendSec.innerHTML=sec;
        }
        if(sec>59){
            min++;
            appendMin.innerHTML="0"+min;
            sec=0;
            appendSec.innerHTML= "0"+0;
        }
        if(min>9){
            appendMin.innerHTML= min;
        }
        if(min>59){
            alert("you reach out the limits");
            tens="00";
            sec="00";
            min ="00";
            appendTens.innerHTML=tens;
            appendSec.innerHTML=sec;
            appendMin.innerHTML=min;
        }
    }

}