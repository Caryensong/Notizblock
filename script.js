let allNotes ={
  'notesTitles' : [],
  'notes' :[],

  'trashNotesTitles' :[],
  'trashNotes' :[],

  'saveNotesTitles' :[],
  'saveNotes' :[]
}

function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
  renderSaveNotes();
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

  localStorage.setItem("saveNotesTitles", JSON.stringify(allNotes.saveNotesTitles));
  localStorage.setItem("saveNotes", JSON.stringify(allNotes.saveNotes));

  localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("notes"));
  let myArrTitle = JSON.parse(localStorage.getItem("notesTitles"));
 
  if( myArr && myArrTitle){
  allNotes.notes = myArr;
  allNotes.notesTitles = myArrTitle;
  }

let mySaveArr = JSON.parse(localStorage.getItem("saveNotes"));
let mySaveArrTitle = JSON.parse(localStorage.getItem("saveNotesTitles"));

if( mySaveArr && mySaveArrTitle){
  allNotes.saveNotes = mySaveArr;
allNotes.saveNotesTitles = mySaveArrTitle;
}

let myTrashArr = JSON.parse(localStorage.getItem("trashNotes"));
let myTrashArrTitle = JSON.parse(localStorage.getItem("trashNotesTitles"));

if( myTrashArr && myTrashArrTitle){
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
    deletAllBtn.innerHTML = `<button onclick="deleteAll()" class="delete_all_btn"> delete all</button>`
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
// // // // // // // // // // //

// function noteToSave(indexNote) {
//   let saveNote = notes.splice(indexNote, 1);
//   saveNotes.push(saveNote[0]);
//   let saveNoteTitle = notesTitles.splice(indexNote, 1);
//   saveNotesTitles.push(saveNoteTitle[0]);

//   saveToLocalStorage();
//   getFromLocalStorage() 
//   renderNotes();
//   renderSaveNotes();
//   renderTrashNotes();
// }


// function saveNoteToTrash(indexNote) {
//   let saveNoToTrash = saveNotes.splice(indexNote, 1);
//   trashNotes.push(saveNoToTrash[0]);
//   let saveTitleToTrash = saveNotesTitles.splice(indexNote ,1);
//   trashNotesTitles.push(saveTitleToTrash[0]);

//   saveToLocalStorage();
//   getFromLocalStorage() 
//   renderNotes();
//   renderSaveNotes();
//   renderTrashNotes();
// }


// function noteToTrash(indexNote) {
//   let trashNote = notes.splice(indexNote, 1);
//   trashNotes.push(trashNote[0]);
//   let trashNoteTitle = notesTitles.splice(indexNote, 1);
//   trashNotesTitles.push(trashNoteTitle[0]);

//   saveToLocalStorage();
//   getFromLocalStorage() 
//   renderNotes();
//   renderSaveNotes();
//   renderTrashNotes();
// }


// function saveNoteToTop(indexNote){
//   let saveNoteToTop = saveNotes.splice(indexNote, 1);
//   notes.push(saveNoteToTop[0]);
//   let saveTitleToTop = saveNotesTitles.splice(indexNote, 1);
//   notesTitles.push(saveTitleToTop[0]);

//   saveToLocalStorage();
//   getFromLocalStorage() 
//   renderNotes();
//   renderSaveNotes();
//   renderTrashNotes();
// }


function moveNote(indexNote, startKey, destinationKey){
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);
  let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(noteTitle[0]);

  saveToLocalStorage();
  getFromLocalStorage() 
  renderNotes();
  renderSaveNotes();
  renderTrashNotes();
}


// function trashNoteToTop(indexNote){
//   let trashNoteToTop = allNotes.trashNotes.splice(indexNote, 1);
//   allNotes.notes.push(trashNoteToTop[0]);
//   let trashTitleToTop = trashNotesTitles.splice(indexNote, 1);
//   allNotes.notesTitles.push(trashTitleToTop[0]);

//   saveToLocalStorage();
//   getFromLocalStorage() 
//   renderNotes();
//   renderSaveNotes();
//   renderTrashNotes();
// }


function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);

  renderNotes();
  saveToLocalStorage();
  renderTrashNotes();  
}


function deleteAll(){
  let deletAllBtn = document.getElementById("deleteAll");
  
  allNotes.trashNotes =[];
  allNotes.trashNotesTitles =[];

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
  deletAllBtn.innerHTML = "";
}