var a,b,result;

console.log("hello")

function setValues() {
a = Number(document.getElementById("loanAmount").value);
b = Number(document.getElementById("interestRate").value);
}

function calc(){
setValues();
result = a*b;
document.getElementById("resultNumber").innerHTML = ("Amount: "+result);
}