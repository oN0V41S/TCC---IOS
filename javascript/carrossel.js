let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    PROXIMAIMG();
}, 7000)


function PROXIMAIMG(){
    count ++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

// carrosell 2
