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

