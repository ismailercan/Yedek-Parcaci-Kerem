
let animalsInFarm = ["cow", "chicken", "sheep", "pig"];

let animalInput = document.getElementById("animal");
let addButton = document.getElementById("add");
let calculateButton = document.getElementById("calculate");
let resetButton = document.getElementById("reset")
let resultElement = document.getElementById("result");
let addedElement = document.getElementById("added");

let sum = 0;

//Hayvanlarin ayaklari hesaplayin
function calculateAnimalsFeet() {

    for (let i = 0; i < animals.length; i++) {

        if (animals[i] == "pig") {
            a = 4;
            sum = sum + a;
        }
        if (animals[i] == "cow") {
            a = 4;
            sum = sum + a;
        }
        if (animals[i] == "sheep") {
            a = 4;
            sum = sum + a;
        }
        if (animals[i] == "chicken") {
            a = 2;
            sum = sum + a;
        }

        console.log(sum);

    }

    return resultElement.innerHTML = "Sum of Feet: " + sum;
}

// Kullanicidan alinan hayvanlari koymak icin boş bir dizi oluşturun
let animals = [];




let add = () => {

    const inputValue = animal.value;
    //Girilen deger eldeki arraydekilerle eslesiyor mu diye kontrol edin
    if (!animalsInFarm.includes(animal.value)) {
        alert("Please enter just cow, pig, sheep, chicken")
    } else {
        // Diziye girilen hayvani ekleyin
        animals.push(inputValue);

    }
    addedElement.innerHTML = ("What You Added: " + animals)
    console.log("Dizi Güncellendi:", animals);
    // Input alanını temizleyin
    animalInput.value = "";
    //"result" bir div oldugundan dolayi tekrar alani temizlemek icin "value" yerine "innerHTML" yazin
    document.getElementById("result").innerHTML = "";

}


//Input ve divleri temizliyin
function resetCalculate() {
    animalInput.disabled = false;
    animalInput.value = "";
    addedElement.innerHTML = "";
    resultElement.innerHTML = "";
}