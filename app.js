/*
let parts = ["Kaporta5",
    "Ak3ü",
    "Stop Lambasi",
    "Radyatör 21",
    "Karbüratör 42",
    "Tekerlek",
    "3 AYNA",
    "Jant"];
    */
let partsInput = document.getElementById("parts");
let addButton = document.getElementById("add");
let resultElement = document.getElementById("result");
let parts = [];

function upperCase() {
    let upperParts = "";
    for (let i = 0; i < parts.length; i++) {
        let d = new Date();
        upperParts += "KEREMAG_" + parts[i].toUpperCase().replace(/[^a-zA-Z]/g, "").split("").reverse().join("") + " " + d;
        console.log(upperParts);

    }
    return resultElement.innerHTML = upperParts;
}

partsInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { // Enter tuşuna basıldığını kontrol edin
        const inputValue = partsInput.value;
       
            parts.push(inputValue); // Diziye girilen veriyi ekleyin
            console.log("Array updated:", parts);
            partsInput.value = ""; // Input alanını temizleyin
        
    }
});

/*
function replaceNumber() {
    for (let i = 0; i < parts.length; i++) {
        let replaceParts = parts[i].replace(/[^a-zA-Z]/g, "");
        console.log(replaceParts);

    }
}
replaceNumber();

function reverse() {
    for (let i = 0; i < parts.length; i++) {
        let reverseParts = parts[i].split("").reverse().join(""); //Önce ögeyi split() ile ayirip reverse() ile ters ceviriyoruz, sonra join() ile 
        console.log(reverseParts);
       
    }
}
reverse();

function concat() {
    for (let i = 0; i < parts.length; i++) {
        let concatParts = "KEREMAG_" + parts[i];
        console.log(concatParts);
       
    }
}
concat();


function date(){
    for(let i=0; i<parts.length; i++){
        let d = new Date();
        let date = parts[i] + " " + d;
        console.log(date);
    }
}
date();
*/