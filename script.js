
var inputElement = document.getElementById("inputs");
let select = document.getElementById("select");
let qrbox = document.getElementById("qrbox")
let size = select.value;

let downloadbtn = document.getElementById("downloadbtn");
downloadbtn.addEventListener("click", ()=>{
    let qrimg = document.querySelector("#qrbox img");
    if (qrimg !== null) {
        let imgatr = qrimg.getAttribute('src')
        downloadbtn.setAttribute("href", imgatr)
    }
    else{
        alert("Please Enter Any Text For QR Code")
    }
})


select.addEventListener("change", (e)=>{
    size = e.target.value;
    generateQRCode();
});

function generateQRCode() {
    qrbox.innerHTML = "";
    new QRCode(qrbox,{
        text: inputElement.value,
        width: size,
        height: size,
        padding: 20,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

  




