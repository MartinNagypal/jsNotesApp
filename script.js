class Note {
    constructor(title, content, id, hr, min, dd, mm, yyyy) {
        this.title = title;
        this.content = content;
        this.id = id;
        this.hour = hr;
        this.minute = min;
        this.day = dd;
        this.month = mm;
        this.year = yyyy;
    }

    showNote() {
        //create note container
        const container = document.getElementById("notesContainer");
        const div = document.createElement("div");
        div.classList.add("notes");

        //display note object
        const title = document.createElement("h2");
        title.classList.add("noteTitle");
        title.textContent = this.title;
        const content = document.createElement("p");
        content.classList.add("noteContent");
        content.textContent = this.content;

        //create note manage div
        const manageDiv = document.createElement("div");
        manageDiv.classList.add("manageDiv");
        const idDiv = document.createElement("div");
        idDiv.classList.add("noteIdDiv");
        const id = document.createElement("p");
        id.classList.add("noteId");
        id.textContent = `ID: ${this.id}`;
        idDiv.appendChild(id);
        const dateP = document.createElement("p");
        dateP.classList.add("dateP");
        dateP.textContent = `${this.hour}:${this.minute} - ${this.day}.${this.month}.${this.year}`;
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        const rmLogo = document.createElement("i");
        rmLogo.classList.add("fa-solid", "fa-trash");
        removeButton.appendChild(rmLogo);

        removeButton.addEventListener("click", () => {
            div.classList.add("remove");
            setTimeout(() => {
                this.deleteNote();
            }, 300);
        });

        //build dom
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(manageDiv);
        manageDiv.appendChild(idDiv);
        manageDiv.appendChild(dateP);
        manageDiv.appendChild(removeButton);
        container.appendChild(div);

    }

    deleteNote() {
        removeNote(this.id);
    }
}

let noteArray = [];

const submitNotiz = document.getElementById("submitNotiz");
const noteTitleInput = document.getElementById("noteTitleInput");
const noteContentInput = document.getElementById("noteContentInput");
const storage = window.localStorage;

function clearNotes() {
    const domNotes = document.querySelectorAll(".notes");
    domNotes.forEach(note => note.remove());
}

function refreshNotes() {
    clearNotes();
    for(let i = noteArray.length -1; i >= 0; i--) {
        noteArray[i].showNote();
    }
}

function clearNotizen() {
    storage.clear();
    clearNotes();
    noteArray = [];
    toggleNewNote();
}

function addNotiz() {
    let noteTitle = noteTitleInput.value;
    let noteContent = noteContentInput.value;
    let id = noteArray.length;
    for(let i = 0; i < noteArray.length; i++) {
        if(noteArray[i].id == noteArray.length) {
            id++;
        }
    }
    const date = new Date();
    const note = new Note(noteTitle, noteContent, id, date.getHours(), date.getMinutes(), date.getDate(), date.getMonth() + 1, date.getFullYear());
    noteArray.push(note);
    refreshNotes();
    console.log(noteArray);
    toggleNewNote();
}

function removeNote(id) {
    let count = 0;
    while(count < noteArray.length && id != noteArray[count].id) {
        count++;
    }
    noteArray.splice(count, 1);
    console.log("removed note");
    refreshNotes();
}

function toggleNewNote(){
    const container = document.getElementById("notesManageContainer");
    const newNoteContainer = document.querySelector(".newNoteContainer");
    const addNoteButton = document.querySelector(".addNoteButton");
    newNoteContainer.classList.toggle("hidden");
    container.classList.toggle("hidden");
    addNoteButton.classList.toggle("cancel");
}