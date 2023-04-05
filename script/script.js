let newBtn = document.querySelector(".box1")
let darkBtn = document.querySelector(".purple")
let saveBtn = document.querySelector(".save")
let cancelBtn = document.querySelector(".red")
let textBox = document.querySelector('.text');
let notesArray = [{title:"note one", body:"this is my first note"}]
let listUL = document.querySelector('ul')
let index = 0;

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
};

function saveNote(index) {
    let choice = window.prompt("What is the title of the note that you want to save?");
    if (choice != NULL && choice != undefined && choice != "") {
        notesArray.push({title: choice, body: textBox.value});
        index += 1;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(notesArray[index]['title']));
        document.querySelector('.notes').appendChild(li);
        return index;
    }
};

function readNote(event) {
    console.log(notesArray)
    for (element in notesArray) {
        if (notesArray[element]['title'] == event.target.textContent) {
            textBox.value = notesArray[element]['body'];
        }
    }
};


darkBtn.addEventListener('click', darkMode);
cancelBtn.addEventListener('click', cancel);
newBtn.addEventListener('click', newNote);
saveBtn.addEventListener('click', function() {
    index = saveNote(index);
}, false);
listUL.addEventListener('click', readNote);