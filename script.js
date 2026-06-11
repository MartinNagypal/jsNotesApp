class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    showNote() {
        body = document.getElementById("body");
        const div = document.createElement("div");
        div.classList.add("notes");
        const title = document.createElement("h2");
        title.classList.add("noteTitle");
        title.textContent = this.title;
        const content = document.createElement("p");
        content.classList.add("noteContent");
        content.textContent = this.content;
        div.appendChild(title);
        div.appendChild(content);
        body.appendChild(div);

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

const note1 = new Note("Notiz 1", "Das ist eiine Notiz");
note1.showNote();

function addNotiz() {
    let noteTitle = noteTitleInput.value;
    let noteContent = noteContentInput.value;
    const note = new Note(noteTitle, noteContent);
    noteArray.push(note);
    refreshNotes();
    console.log(noteArray);
}
