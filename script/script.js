let newBtn = document.querySelector(".box1")
let darkBtn = document.querySelector(".purple")
let saveBtn = document.querySelector(".save")
let cancelBtn = document.querySelector(".red")
let textBox = document.querySelector('.text');

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
    textBox.classList.add("hidden");
    saveBtn.classList.add("hidden");
    cancelBtn.classList.add("hidden");
};

function newNote() {
    if (textBox.classList.contains("hidden")) {
        textBox.classList.remove("hidden");
        saveBtn.classList.remove("hidden");
        cancelBtn.classList.remove("hidden");
    }
    else {
        textBox.value = ""
    }
}
darkBtn.addEventListener('click', darkMode);
cancelBtn.addEventListener('click', cancel);
newBtn.addEventListener('click', newNote);
