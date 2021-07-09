function tinhTong(){
    let a = parseInt(document.getElementById("input").value);
    let b = parseInt(document.getElementById("input2").value);
    document.getElementById("dau").innerHTML = "+";
    let c=a+b;
    document.getElementById("bang").innerHTML = "=";
    document.getElementById("print").innerHTML = c;
}
function tinhHieu(){
    let a = parseInt(document.getElementById("input").value);
    let b = parseInt(document.getElementById("input2").value);
    document.getElementById("dau").innerHTML = "-";
    let c=a-b;
    document.getElementById("bang").innerHTML = "=";
    document.getElementById("print").innerHTML = c;
}
function tinhNhan(){
    let a = parseInt(document.getElementById("input").value);
    let b = parseInt(document.getElementById("input2").value);
    document.getElementById("dau").innerHTML = "x";
    let c=a*b;
    document.getElementById("bang").innerHTML = "=";
    document.getElementById("print").innerHTML = c;
}
function tinhChia(){
    let a = parseInt(document.getElementById("input").value);
    let b = parseInt(document.getElementById("input2").value);
    document.getElementById("dau").innerHTML = "/";
    let c=a/b;
    document.getElementById("bang").innerHTML = "=";
    document.getElementById("print").innerHTML = c;
}