let running = false;
let cscore=[];
let tscore=[];
let activeplayer = 0;

    function change()
    {
        var elem=document.getElementById("startbtn").value;
        if(elem=="Start")
        document.getElementById("startbtn").value="Stop"; 
        else
        document.getElementById("startbtn").value="Start"; 
    }   
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
    }
    else
    {
        running=false;
        cscore = [0,0];
        tscore = [0,0];
        document.getElementById("total0").innerHTML=0;
        document.getElementById("total1").innerHTML=0;
        document.getElementById("current0").innerHTML=0;
        document.getElementById("current1").innerHTML=0;
        change();
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
       
    }
    else if (running && activeplayer==1)
    {
        tscore[activeplayer]=tscore[activeplayer]+cscore[activeplayer];
        document.getElementById("total1").innerHTML=tscore[activeplayer];
        cscore[activeplayer]=0;
        document.getElementById("current1").innerHTML=cscore[activeplayer];
        activeplayer = 0;
        
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

        }
    }
    
}

        
        //var q = document.getElementById('active-player1');
        if (activeplayer==0) {
           document.getElementById("active-player0").style.visibility = "visible"; }
           //document.getElementsByClassName("current-player").style.visibility = "hidden";}