let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function genererQr(){
    if(qrText.value.lenght > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else
    {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
    
}

/*let btnQrCode = document.getElementById("btn-qrCode");
    btnQrCode.addEventListener("click", function(){
        genererQr();
    })*/
