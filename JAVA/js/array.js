const y=[];

function Ekle(){
    var a = document.getElementById("ee").value;
    y.push(a+"<br>");
    document.getElementById("demo").innerHTML=y;
}

function Sil(){
    var b = document.getElementById("ee").value;
    z.pop(b+"<br>");
    document.getElementById("demo").innerHTML=z;
}