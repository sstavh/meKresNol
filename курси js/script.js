var password=document.getElementById("password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber= Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;

function copyPassword() {
    var copeText = document.getElementById("password");
    copeText.select () ;
    document.execCommand("copy");
}
