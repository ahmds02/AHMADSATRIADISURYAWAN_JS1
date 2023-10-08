var cuaca = "cerah";
var suhu = 30;

if (cuaca === "cerah") {
    if (suhu > 25) {
        console.log("Hari ini cerah dan panas.");
    } else {
        console.log("Hari ini cerah, tetapi tidak terlalu panas.");
    }
} else if (cuaca === "hujan") {
    console.log("Hari ini hujan.");
} else {
    console.log("Kondisi cuaca tidak dikenali.");
}
