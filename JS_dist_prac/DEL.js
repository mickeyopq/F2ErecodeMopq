
        if(event.which==37){
            //key code 37為→
            // alert("你按下了下一頁");
            document.getElementById('upd').innerHTML="左";
        }
        else if(event.which==39){
            //key code 39為←
            // alert("你按下了上一頁");
            document.getElementById('upd').innerHTML="右右→";
            }
        else if(event.which==38){
            document.getElementById('upd').innerHTML="upup上上";
        }
        else if(event.which==40){
            document.getElementById('upd').innerHTML="down";
        }


;;
switch(a){
    case 39:
        document.getElementById('upd').innerHTML="右右→";
        [break;]
    case 37:
        document.getElementById('upd').innerHTML="left";
        [break;]

}