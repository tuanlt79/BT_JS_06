function getELE(id) {
    return document.getElementById(id);
}

function soNguyenMin() {
    var n = 1;
    var S = 0;
    while (S < 10000) {
        n++;
        S += n;
    }
    getELE("txtBai1").innerHTML = ('Số Nguyên Min: '+n+'<br> Tổng: '+S);
    
}
getELE("btnTim").onclick = soNguyenMin;
// -----------------------------------BÀI TẬP 2-------------------------------------------------------------
function tinhTong2So() {
    var S = 0;
    var x = parseInt(getELE('inputX').value);
    var n = parseInt(getELE('inputN').value);
    var T = 1;
    // var count = 1;
    // while (count <= n) {
    //     T = T * x;
    //     S = S + T;
    //     count++;
    // } 
    for (var i = 1; i <= n; i++)
    {
        T = T * x;
        S = S + T;  
   }
    getELE('txtBT2').innerHTML = S;
}
getELE('btnTinh').onclick = tinhTong2So;
// -----------------------------------BÀI TẬP 3-------------------------------------------------------------
function tinhGiaiThua() {
    var n = parseFloat(getELE('inputN2').value);
    var giaiThua = 1;
    var count = 1;
    while (count <= n) {
        giaiThua = giaiThua * count;
        count++;
    }
    // for (var i = 1; i <= n; i++){
    //     giaiThua = giaiThua*i;
    // }
    getELE("txtBT3").innerHTML = giaiThua;
}
getELE("btnTinhGT").onclick = tinhGiaiThua;
// -----------------------------------BÀI TẬP 4-------------------------------------------------------------
document.getElementById("remove_div").style.display = "none";
function hienThe() {
    document.getElementById("remove_div").style.display = "block";

    var dsTheDiv = document.querySelectorAll(".container .row .col-8 .bt4 div");
    dsTheDiv[0].style.background = "red";
    dsTheDiv[1].style.background = "green";
    dsTheDiv[2].style.background = "red";
    dsTheDiv[3].style.background = "green";
    dsTheDiv[4].style.background = "red";
    dsTheDiv[5].style.background = "green";
    dsTheDiv[6].style.background = "red";
    dsTheDiv[7].style.background = "green";
    dsTheDiv[8].style.background = "red";
    dsTheDiv[9].style.background = "green";
}
document.querySelector('#btnXuatDiv').onclick = hienThe;