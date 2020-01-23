function hyoji(){
    var str="前田智徳";
    var cnt=document.timer.moji.value.length;
if(cnt<4){document.timer.moji.value=str.substr(0,cnt+1);}
else{document.timer.moji.value=""}}
function startfnc(){setInterval("hyoji()",1000);}

function hyoji2(){
    var str="イチロー";
    var cnt=document.timer2.moji.value.length;
if(cnt<4){document.timer2.moji.value=str.substr(0,cnt+1);}
else{document.timer2.moji.value=""}}
function startfnc2(){setInterval("hyoji2()",1000);}