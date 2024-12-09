function getNoteTemplate(indexNote) {
  return ` 
  <div class="note_content">
    <span class="title">${notesTitles[indexNote]}</span> ▹ ${notes[indexNote]}
      <div class="btn">
        <button onclick= "noteToSave(${indexNote})"><img src="./assets/icon/ordner.png" alt="Archiv"></button>
        <button onclick= "noteToTrash(${indexNote})"><img src="./assets/icon/trash_black.png" alt="trash"></button>
      </div>
  </div>`;
}


function getSaveNoteTemplate(indexSaveNote) {
    return ` 
    <div class="note_content">
      <span class="title">${saveNotesTitles[indexSaveNote]}</span> ▹ ${saveNotes[indexSaveNote]} 
        <div class="btn">
          <button onclick= "saveNoteToTop(${indexSaveNote})"><img src="./assets/icon/top.png" alt="top"></button>
          <button onclick= "saveNoteToTrash(${indexSaveNote})"><img src="./assets/icon/trash_black.png" alt="trash"></button>
        </div>
    </div>`;
  }
  

function getTrashNoteTemplate(indexTrashNote) {
  return `
  <div class="note_content">
    <span class="title">${trashNotesTitles[indexTrashNote]}</span> ▹ ${trashNotes[indexTrashNote]}
      <div class="btn">
        <button onclick= "trashNoteToTop(${indexTrashNote})"><img src="./assets/icon/top.png" alt="top"></button>
        <button onclick= "deleteNote(${indexTrashNote})"><img src="./assets/icon/trash.png" alt="trash"></button>
      </div>
  </div>`;
}
