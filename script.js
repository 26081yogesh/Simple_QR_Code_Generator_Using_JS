const qrText = document.getElementById("qr-text");
const generateButton = document.getElementById("generate");

const qrContainer = document.querySelector(".qr-body");

generateButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(qrText.value.length > 0){
        generateQrCode();
    }
    else{
        alert("Empty Text Field!")
    }
    
});

function generateQrCode(){
    qrContainer.innerHTML = "";
    new QRCode(
        qrContainer, 
        {
            text: qrText.value,
            width: 200,
            height: 200,
            colorLight: "#fff",
            colorDark: "#000",
            correctLevel : QRCode.CorrectLevel.H
        });
}