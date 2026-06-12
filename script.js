class Note {
    constructor(title, content, id) {
        this.title = title;
        this.content = content;
        this.id = id;
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

        //create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Notiz löschen";
        removeButton.classList.add("removeButton");

        removeButton.addEventListener("click", () => {
            this.deleteNote();
        });

        //build dom
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(removeButton);
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
    for(let i = 0; i < noteArray.length; i++) {
        noteArray[i].showNote();
    }
}

function clearNotizen() {
    storage.clear();
    clearNotes();
    noteArray = [];
}

function addNotiz() {
    let noteTitle = noteTitleInput.value;
    let noteContent = noteContentInput.value;
    const note = new Note(noteTitle, noteContent, noteArray.length);
    noteArray.push(note);
    refreshNotes();
    console.log(noteArray);
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