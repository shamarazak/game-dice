let running = false;
let cscore=[];
let tscore=[];
let activeplayer = 0;
let winner=20;

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
            
            let path;
            path="img/";
            switch(x)
            {
                case 1:
                    {
                        path += "dice1.png";
                        break;
                    }
                    case 2:
                    {
                        path += "dice2.png";
                        break;
                    }case 3:
                    {
                        path += "dice3.png";
                        break;
                    }case 4:
                    {
                        path += "dice4.png";
                        break;
                    }case 5:
                    {
                        path += "dice5.png";
                        break;
                    }case 6:
                    {
                        path += "dice6.png";
                        break;
                    }
            }
            
            var img=document.getElementById("imgpp");
            console.log(img);
             img.src=path;
        

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

{   let winner=20;
    if(running && activeplayer==0)
    {
        tscore[activeplayer]=tscore[activeplayer]+cscore[activeplayer];
        document.getElementById("total0").innerHTML=tscore[activeplayer];

        cscore[activeplayer]=0;

        document.getElementById("current0").innerHTML=cscore[activeplayer];
        if(tscore[activeplayer]>=winner)
        {
            document.getElementById("active-player0").classList.add("winnerbox");
           running=false;
        }
        else{
        activeplayer=1;
        document.getElementById("active-player1").classList.add("current-player");
        document.getElementById("active-player0").classList.remove("current-player");
        }
    }
    else if (running && activeplayer==1)
    {
        tscore[activeplayer]=tscore[activeplayer]+cscore[activeplayer];

        document.getElementById("total1").innerHTML=tscore[activeplayer];

        cscore[activeplayer]=0;
        document.getElementById("current1").innerHTML=cscore[activeplayer];
        if(tscore[activeplayer]>=winner)
        {
            document.getElementById("active-player1").classList.add("winnerbox");
            
            
        }
        else{
        activeplayer = 0;
        document.getElementById("active-player0").classList.add("current-player");
        document.getElementById("active-player1").classList.remove("current-player");
        }
    }
}
function randomnumber1()
{   
    if (running && activeplayer==1)
        {
            var y= Math.floor((Math.random() * 6) + 1);
            
            let path;
            path="img/";
            switch(y)
            {
                case 1:
                    {
                        path += "dice1.png";
                        break;
                    }
                    case 2:
                    {
                        path += "dice2.png";
                        break;
                    }case 3:
                    {
                        path += "dice3.png";
                        break;
                    }case 4:
                    {
                        path += "dice4.png";
                        break;
                    }case 5:
                    {
                        path += "dice5.png";
                        break;
                    }case 6:
                    {
                        path += "dice6.png";
                        break;
                    }
            }
            
            var img=document.getElementById("imgpp");
            console.log(img);
             img.src=path;
        

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
/*if(tscore[0]>=winner && activeplayer==0)
{
    alert("player1won");
    document.getElementById("active-player0").classList.add("winnerbox");

}
else if(tscore[1]>=winner && activeplayer==1)
{
    alert("player 2 won");

    document.getElementById("active-player1").classList.add("winnerbox");
}*/


