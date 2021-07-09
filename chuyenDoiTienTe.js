function convert() {
    let a = document.getElementById("amount").value;
    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;
    let d;
    if (b == "vietnam" && c == "usd") {
        d = a / 23000;
    } else if (b == "usd" && c == "vietnam") {
        d = a * 23000;
    } else d = a;
    {
    }
    document.getElementById("print").innerHTML = d;
}