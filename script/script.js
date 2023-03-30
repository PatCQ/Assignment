let newBtn = document.querySelector(".box1")
let darkBtn = document.querySelector(".purple")
let saveBtn = document.querySelector(".save")
let cancelBtn = document.querySelector(".red")
function darkMode() {
    let elementAside = document.querySelector("aside");
    let elementTextBody = document.querySelector(".text");
    document.body.classList.toggle('darkBody');
    elementAside.classList.toggle('darkAside');
    elementTextBody.classList.toggle('darkText');
    if (darkBtn.textContent == "Dark Theme") {
        darkBtn.textContent = "Light Theme";
    }
    else {
        darkBtn.textContent = "Dark Theme";
    }
};
function cancel() {
    let textBox = document.querySelector('.text');
    textBox.classList.add("hidden");
    saveBtn.classList.add("hidden");
    cancelBtn.classList.add("hidden");
};
darkBtn.addEventListener('click', darkMode);
cancelBtn.addEventListener('click', cancel);
