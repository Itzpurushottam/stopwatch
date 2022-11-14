var hr=0;
var m=0;
var s=0;
var ms=0;
var timer = false;
function stop()
{
   timer= false;
   stopwatch(); 

}
function reset()
{
   timer= false;
   document.getElementById("hr").innerHTML="00";
     document.getElementById("m").innerHTML="00";
     document.getElementById("s").innerHTML="00";
     document.getElementById("ms").innerHTML="00";
    

}
function start()
{
   timer =true;
   stopwatch();
   
}

function stopwatch()
{
    if(timer==true)
    {
     ms= ms+1;
     if(ms>100)
     {
        s=s+1;
        ms=0;
     }
     if(s>60)
     {
        m=m+1;
        ms=0;
        s=0;
     }if(m>60)
     {
        hr=hr+1;
        ms=0;
        s=0;
        m=0;
     }

   
     var hr1=hr;
     var m1=m;
     var s1=s;
     var ms1=ms;
     if(ms<10)
     {
        ms1="0" + hr;
     }
     if(s<10)
     {
        s1="0" + s;
     }
     if(hr1<10)
     {
        hr1="0" + hr1;
     }
     if(m1<10)
     {
        m1="0" + m1  ;
     }
     document.getElementById("hr").innerHTML=hr1;
     document.getElementById("m").innerHTML=m1;
     document.getElementById("s").innerHTML=s1;
     document.getElementById("ms").innerHTML=ms1;
     setTimeout("stopwatch()", 10);
   
    }
}