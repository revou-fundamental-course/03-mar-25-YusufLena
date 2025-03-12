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
    const nama = document.forms[''][''].value
    const birth_date = document.forms[''][''].value
    const gender = document.forms[''][''].value
    const msg = document.forms[''][''].value

    if(nama == "", birth_date == "", gender == "", msg == "") {
        document.getElementById().innerHTML = "";

        return false
    }

    setValue(nama, birth_date, gender, msg);

    return false;
}

function setValue(nama, birth_date, gender, msg) {
    document.getElementById("").innerHTML = ""
    document.getElementById("").innerHTML = ""
    document.getElementById("").innerHTML = ""
    document.getElementById("").innerHTML = ""
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

    if (bannerIndex >= banners.length){
        bannerIndex = 0;
    }else if(bannerIndex < 0){
        bannerIndex = banners.length - 1
    }

    for (let i = 0; i < banners.length; i++){
        banners[i].style.display = 'none';
        banners[bannerIndex].style.display = 'block'
    }
}

setInterval(nextBanner, 2500)