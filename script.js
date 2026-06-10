const notizText = document.getElementById("notizText");
const submitNotiz = document.getElementById("submitNotiz");
const notitzInput = document.getElementById("notitzInput");
const storage = window.localStorage;

function addNotiz() {
    let notizInhalt = notitzInput.value;
    console.log(notizInhalt);
    storage.setItem("notiz", notizInhalt);
    notizText.textContent = notizInhalt;
}

function clearNotizen() {
    storage.clear();
    notizText.textContent = "Alle notizen gelöscht!";
}

notizText.textContent = storage.getItem("notiz") || "Keine Notizen vorhanden.";