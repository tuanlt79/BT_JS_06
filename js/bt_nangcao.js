function tinhSoNguyenTo() {
    var num = +document.getElementById("inputSoN").value;
    var count = 0;
    var count2 = 0;
    var sNT = '';
        if (num < 2 ) {
            console.log("không phải SNT");
        }
        else if (num >= 2) {
            for (var i = 2; i <= Math.sqrt(num); i++)
        {
            if (num % i == 0)
            {
                count++; 
                }
            }
            if (count == 0) {
                console.log("SNT");
            } 
        }  
}
document.getElementById("btnBT5").onclick = tinhSoNguyenTo;
