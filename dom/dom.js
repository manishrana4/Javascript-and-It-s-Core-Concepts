let clickBtnMinus = document.getElementById("minus");
let clickBtnPlus = document.getElementById("plus");
let output = document.querySelector(".count");

let count = 0;
clickBtnPlus.addEventListener("click", () => {
    count++;
    output.innerHTML = count;
    output.setAttribute("class", "clickedPlus");
});

clickBtnMinus.addEventListener("click", () => {
    count--;
    output.innerHTML = count;
    output.setAttribute("class", "clickedMinus");
});


