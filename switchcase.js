var hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari kerja.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Harilibur.");
        break;
    default:
        console.log("Hari ini tidak diketahui.");
}
