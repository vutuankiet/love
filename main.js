function deny(){
    document.getElementById('deny').style.top =Math.random()*300 +"px";
    document.getElementById('deny').style.right =Math.random()*300 +"px";
}

function ok(){
    document.getElementById('audio').play();
    document.getElementById('img').style.display="inline-block";
    document.getElementById('ok').style.display="none";
    document.getElementById('deny').style.display="none";
    document.getElementById('quest').innerText="Yêu nhau nhé hihi!";
    document.getElementById('info').style.display="block";
}