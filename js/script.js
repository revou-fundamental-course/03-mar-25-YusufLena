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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs() {
    showDivs(slideIndex == n);
}
function showDivs(){
    var i;
    var x = document.getElementsByClassName('main-banner');
    if(n > imgList.length) slideIndex = 1;
    else if( n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList; i++){
        imgList[i].style.display = "" ;
    }
    
    imgList[slideIndex - 1].style.display = "block"
}
setInterval(() => {
    plusDivs(1);
}, 1000)