// Store the generated OTP so both generate and verify can use it
let generatedOtp;


function otp() {
    for (let i = 0; i < 1; i++) {
        generatedOtp = Math.floor(Math.random() * 10000);
        alert(generatedOtp);
    }
}

function verify() {
    if (generatedOtp === undefined) {
        alert("Generate an OTP first");
        return;
    }
    let otp = document.getElementById("otp").value;
    if(otp == generatedOtp){
        alert("OTP is correct");
    } else {
        alert("OTP is incorrect");
    }
}

// Connect the button so clicking it runs otp()
document.getElementById("generate").addEventListener("click", otp);
document.getElementById("verify").addEventListener("click", verify)