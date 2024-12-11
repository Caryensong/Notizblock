let allNotes = {
  notesTitles: [],
  notes: [],

  trashNotesTitles: [],
  trashNotes: [],

  saveNotesTitles: [],
  saveNotes: [],
};

function init() {
  getFromLocalStorage();
  renderAllNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function addNoteAndTitle() {
  let titleInputRef = document.getElementById("titleInput");
  let noteInputRef = document.getElementById("noteInput");
  let errorIn = document.getElementById("errorInput");

  let titleInput = titleInputRef.value;
  let noteInput = noteInputRef.value;
  if (titleInput === "" || noteInput === "") {
    errorIn.innerHTML = `Beide Felder ausgefüllt!`;
    setTimeout(() => {
      errorIn.innerHTML = "";
    }, 3000);
    return; //wird beendet wenn feld leer ist
  }
  allNotes.notesTitles.push(titleInput);
  allNotes.notes.push(noteInput);

  saveToLocalStorage();
  renderNotes();

  titleInputRef.value = "";
  noteInputRef.value = "";
}

// ------------- local Storage -----------//

function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
  localStorage.setItem("notes", JSON.stringify(allNotes.notes));

  localStorage.setItem(
    "saveNotesTitles",
    JSON.stringify(allNotes.saveNotesTitles)
  );
  localStorage.setItem("saveNotes", JSON.stringify(allNotes.saveNotes));

  localStorage.setItem(
    "trashNotesTitles",
    JSON.stringify(allNotes.trashNotesTitles)
  );
  localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("notes"));
  let myArrTitle = JSON.parse(localStorage.getItem("notesTitles"));

  if (myArr && myArrTitle) {
    allNotes.notes = myArr;
    allNotes.notesTitles = myArrTitle;
  }

  let mySaveArr = JSON.parse(localStorage.getItem("saveNotes"));
  let mySaveArrTitle = JSON.parse(localStorage.getItem("saveNotesTitles"));

  if (mySaveArr && mySaveArrTitle) {
    allNotes.saveNotes = mySaveArr;
    allNotes.saveNotesTitles = mySaveArrTitle;
  }

  let myTrashArr = JSON.parse(localStorage.getItem("trashNotes"));
  let myTrashArrTitle = JSON.parse(localStorage.getItem("trashNotesTitles"));

  if (myTrashArr && myTrashArrTitle) {
    allNotes.trashNotes = myTrashArr;
    allNotes.trashNotesTitles = myTrashArrTitle;
  }
}


function renderTrashNotes() {
  let trashContentRef = document.getElementById("trashContent");
  trashContentRef.innerHTML = "";
  let deletAllBtn = document.getElementById("deleteAll");
  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    deletAllBtn.innerHTML = `<button onclick="deleteAll()" class="delete_all_btn"> delete all</button>`;
  }
}


function renderSaveNotes() {
  let saveContentRef = document.getElementById("saveContent");
  saveContentRef.innerHTML = "";
  for (
    let indexSaveNote = 0;
    indexSaveNote < allNotes.saveNotes.length;
    indexSaveNote++
  ) {
    saveContentRef.innerHTML += getSaveNoteTemplate(indexSaveNote);
  }
}


function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);
  let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(noteTitle[0]);

  saveToLocalStorage();
  getFromLocalStorage();
  renderAllNotes();
}


function renderAllNotes() {
  renderNotes();
  renderSaveNotes();
  renderTrashNotes();
}


function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);

  saveToLocalStorage();
  renderAllNotes();
}


function deleteAll() {
  let deletAllBtn = document.getElementById("deleteAll");

  allNotes.trashNotes = [];
  allNotes.trashNotesTitles = [];

  saveToLocalStorage();
  renderAllNotes();
  deletAllBtn.innerHTML = "";
}
