var input;
do {
    input = parseInt(prompt("Masukkan angka positif:"));
} while (isNaN(input) || input <= 0);

console.log("Anda memasukkan angka positif: " + input);
