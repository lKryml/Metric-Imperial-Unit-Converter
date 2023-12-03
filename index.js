const convertInput = document.getElementById("convert-input");
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
var inputs = document.querySelectorAll("[id='input']");

const toPounds = document.getElementById("toPounds")
convertBtn.addEventListener("click", function () {
    for (var i = 0; i < inputs.length; i++) 
        inputs[i].textContent = convertInput.value;
    console.log(input.value)
    let convertValue = convertInput.value;

    toPounds.textContent = (convertValue * 2.204).toFixed(2);
    toLiters.textContent = (convertValue / 0.264).toFixed(2);
    toMeters.textContent = (convertValue / 3.281).toFixed(2);

    toFeet.textContent = (convertValue * 3.281).toFixed(2);
    toGallons.textContent = (convertValue * 0.264).toFixed(2);
    toKilos.textContent = (convertValue / 2.204).toFixed(2);

    convertInput.value = ""
});
