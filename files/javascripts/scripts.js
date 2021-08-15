/* CountDown For Pishnahad */
var TimeDiff = 80000000 ;
function countDown(){
    var Hours = Math.floor(TimeDiff/(60*60*1000));
    var Min = Math.floor((TimeDiff%(60*60*1000))/(60*1000));
    var Sec = Math.floor((TimeDiff-((Hours*60*60*1000)+(Min*60*1000)))/1000);
    Min = checkTime(Min);
    Sec = checkTime(Sec);
    var SecOutput = document.getElementById('output1');
    var MINOutput = document.getElementById('output2');
    var HoursOutput = document.getElementById('output3');

    SecOutput.innerHTML = Sec ;
    MINOutput.innerHTML = Min ;
    HoursOutput.innerHTML = Hours ;
    TimeDiff = TimeDiff -1000;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
setInterval(function(){countDown()} , 1000 );

/* menu */
function Close(){
    var a = document.getElementById('mask');
    a.style.display = "none";
}
function Open(){
    var a = document.getElementById('mask');
    a.style.display = "block";
}
/* Search */
function searchClose(){
    var a = document.getElementById('search');
    var b = document.getElementById('top_search');
    b.style.animation = "1.2s closing_search";
    setTimeout(function(){
        a.style.display = "none";
    },1100)
}
function searchOpen(){
    var a = document.getElementById('search');
    var b = document.getElementById('top_search');
    a.style.display = "block";
    b.style.animation = "1.2s opening_search";   
}

    /* tabs part */

function tabs(evnt,tabid){
    var under_line,i,tabs_content = document.getElementsByClassName('tab_content');
    for (i=0 ; i<tabs_content.length ;i++ ){
        tabs_content[i].style.display="none";
    }
    under_line = document.getElementsByClassName('under-line');
    for (i=0 ; i<under_line.length ;i++ ){
        under_line[i].style.background="transparent";
    }
    var parent = evnt.currentTarget.childNodes;
    document.getElementById(tabid).style.display="block";
    parent[3].style.backgroundColor="rgb(247, 84, 84)";
}

function tabs2(evnt,tabid2){
    var under_line,i,tabs_content = document.getElementsByClassName('tab_content2');
    for (i=0 ; i<tabs_content.length ;i++ ){
        tabs_content[i].style.display="none";
    }
    under_line = document.getElementsByClassName('underline2');
    for (i=0 ; i<under_line.length ;i++ ){
        under_line[i].style.background="transparent";
    }
    var parent = evnt.currentTarget.childNodes;
    document.getElementById(tabid2).style.display="block";
    parent[3].style.backgroundColor="rgb(247, 84, 84)";
}

// function myFunction() {
//     var parent = document.getElementById('div1').childNodes;
//     var txt = "";
//     var i;
//     for (i = 0 ; i < parent.length ; i++) {
//         txt = txt + parent[i].nodeName + i + "<br>";
//         }

//     document.getElementById("demo").innerHTML = txt;
//     }       

/* profiles items */

