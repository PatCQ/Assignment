let newBtn = document.querySelector(".box1")
let darkBtn = document.querySelector(".purple")
let saveBtn = document.querySelector(".")
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
darkBtn.addEventListener('click', darkMode);
