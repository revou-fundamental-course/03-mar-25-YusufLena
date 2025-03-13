// ini file java script

// function replaceName(){
//     let nama = prompt("Halo, Siapakah nama anda?", "");
//     if(nama != null){
//         document.getElementById('name').innerHTML = nama; 
//     }else{
//         alert("Eror")
//     }
//     console.log(nama)
// }
// replaceName();


function validateForm() {
    const nama = document.forms['msg-form']['input-name'].value
    const birth_date = document.forms['msg-form']['birth-date'].value
    const msg = document.forms['msg-form']['msg-input'].value
    const date = new Date(document.lastModified);

    const genderElements = document.forms['msg-form']['gender'];
    let gender = "";
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }

    if(nama === "", birth_date === "", gender === "", msg === "") {
        document.getElementById("msg-form").innerHTML = "";
        alert("Semua kolom harus diisi!");
        return false
    }

    setValue(nama, birth_date, gender, msg, date);

    return false;
}

function setValue(nama, birth_date, gender, msg, date) {
    document.getElementById("full-name").innerHTML = nama
    document.getElementById("sender-birth-date").innerHTML = birth_date
    document.getElementById("sender-gender").innerHTML = gender == male ? "Laki-laki" : "Perempuan"
    document.getElementById("sender-msg").innerHTML = msg
    document.getElementById("curent-time").innerHTML = date;
    
    console.log(setValue)
}

// var slideIndex = 1;
// showDivs(slideIndex);
// function plusDivs(n) {
//     showDivs((slideIndex += n));
// }
// function showDivs(n){
//     var i;
//     var imgList = document.getElementsByClassName('img-slideshow');
//     if(n > imgList.length) slideIndex = 1;
//     else if( n < 1) slideIndex = imgList.length;
//     for (i = 0; i < imgList.length; i++){
//         imgList[i].style.display = 'none' ;
//     }
//     imgList[slideIndex - 1].style.display = 'block';
// }
// setInterval(() => {
//     plusDivs(1);
// }, 1000)

let bannerIndex = 0;
showBanner();

function nextBanner(){
    bannerIndex += 1;
    showBanner();
}

function  showBanner(){
    const banners = document.getElementsByClassName('banner-img')
    console.log(banners)

    if (bannerIndex > banners.length){
        bannerIndex = 0;
    }

    for (let i = 0; i < banners.length; i++){
        banners[i].style.display = 'none';
        banners[bannerIndex].style.display = 'block'
    }


}

setInterval(nextBanner, 2500)