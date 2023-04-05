let newBtn = document.querySelector(".box1")
let darkBtn = document.querySelector(".purple")
let saveBtn = document.querySelector(".save")
let cancelBtn = document.querySelector(".red")
let textBox = document.querySelector('.text');
let notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"This is my second note"}]
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

function saveNote() {
    if (textBox.value != "") {
        let choice;
        do {
            choice = window.prompt("What is the title of the note that you want to save?");
            if (choice == "") {
                alert("Title can not be empty");
            }
        } while (choice == "") 
        if(choice != null) {
            notesArray.push({title: choice, body: textBox.value});
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(choice));
            document.querySelector('.notes').appendChild(li);
        }
    }
}

function readNote(event) {
    for (element in notesArray) {
        if (notesArray[element]['title'] == event.target.textContent) {
            textBox.value = notesArray[element]['body'];
        }
    }
};


darkBtn.addEventListener('click', darkMode);
cancelBtn.addEventListener('click', cancel);
newBtn.addEventListener('click', newNote);
saveBtn.addEventListener('click', saveNote);
listUL.addEventListener('click', readNote);