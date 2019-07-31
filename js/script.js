let running = false;
let cscore=[];
let tscore=[];
let activeplayer = 0;
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/dice1.png';

imgArray[1] = new Image();
imgArray[1].src = 'img/dice2.png';

imgArray[2] = new Image();
imgArray[2].src = 'img/dice3.png';

imgArray[3] = new Image();
imgArray[3].src = 'img/dice4.png';

imgArray[4] = new Image();
imgArray[4].src = 'img/dice5.png';

imgArray[5] = new Image();
imgArray[5].src = 'img/dice6.png';


    function change()
    {
        var elem=document.getElementById("startbtn").value;
        if(elem=="Start"){
            
        document.getElementById("startbtn").value="Stop";
      /*  document.getElementById("active-player0").classList.remove("current-player");
        document.getElementById("active-player1").classList.remove("current-player");*/
    } 
        else{
            running=!running;
            cscore = [0,0];
            tscore = [0,0];
            document.getElementById("total0").innerHTML=0;
            document.getElementById("total1").innerHTML=0;
            document.getElementById("current0").innerHTML=0;
            document.getElementById("current1").innerHTML=0;
            
        document.getElementById("startbtn").value="Start"; 
        document.getElementById("active-player0").classList.remove("current-player");
            document.getElementById("active-player1").classList.remove("current-player");
    }   }
function start()
{
    running=true;
    if(running==true)
   { cscore = [0,0];
    tscore = [0,0];
    document.getElementById("total0").innerHTML=0;
    document.getElementById("total1").innerHTML=0;
    document.getElementById("current0").innerHTML=0;
    document.getElementById("current1").innerHTML=0;
    change();
    activeplayer = 0;
    if( activeplayer==0 && running)
        document.getElementById("active-player0").classList.add("current-player");
   
    }
    
}
function randomnumber() 
    {   
        if (running && activeplayer==0)
        {
            var x = Math.floor((Math.random() * 6) + 1);
            document.getElementById("randomimg").innerHTML = x;
        

        if(x!=1) 

        {
            cscore[activeplayer]=cscore[activeplayer]+x;
            document.getElementById("current0").innerHTML=cscore[activeplayer];


        }
        else
        {
            cscore[activeplayer] = 0;
            document.getElementById("current0").innerHTML=0;
            activeplayer = 1;
            document.getElementById("active-player1").classList.add("current-player");
            document.getElementById("active-player0").classList.remove("current-player");

        }
    }
    
       
    }
function hold()
{   if(running && activeplayer==0)
    {
        tscore[activeplayer]=tscore[activeplayer]+cscore[activeplayer];
        document.getElementById("total0").innerHTML=tscore[activeplayer];
        cscore[activeplayer]=0;
        document.getElementById("current0").innerHTML=cscore[activeplayer];
        activeplayer=1;
        document.getElementById("active-player1").classList.add("current-player");
        document.getElementById("active-player0").classList.remove("current-player");
       
    }
    else if (running && activeplayer==1)
    {
        tscore[activeplayer]=tscore[activeplayer]+cscore[activeplayer];
        document.getElementById("total1").innerHTML=tscore[activeplayer];
        cscore[activeplayer]=0;
        document.getElementById("current1").innerHTML=cscore[activeplayer];
        activeplayer = 0;
        document.getElementById("active-player0").classList.add("current-player");
        document.getElementById("active-player1").classList.remove("current-player");
        
    }
}
function randomnumber1()
{   
    if (running && activeplayer==1)
        {
            var y= Math.floor((Math.random() * 6) + 1);
            document.getElementById("randomimg").innerHTML = y;
        

        if(y!=1) 

        {
            cscore[activeplayer]=cscore[activeplayer]+y;
            document.getElementById("current1").innerHTML=cscore[activeplayer];
        }
        else{
            cscore[activeplayer] = 0;
            document.getElementById("current1").innerHTML=0;
            activeplayer = 0;
            document.getElementById("active-player0").classList.add("current-player");
            document.getElementById("active-player1").classList.remove("current-player");
        }
    }
    
}

