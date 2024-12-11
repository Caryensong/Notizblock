function getNoteTemplate(indexNote) {
  return ` 
  <div class="note_content">
    <span class="title">${allNotes.notesTitles[indexNote]}</span> ▹ ${allNotes.notes[indexNote]}
      <div class="btn">
        <button onclick= "moveNote(${indexNote},'notes','saveNotes')"><img src="./assets/icon/ordner.png" alt="Archiv"></button>
        <button onclick= "moveNote(${indexNote},'notes','trashNotes')"><img src="./assets/icon/trash_black.png" alt="trash"></button>
      </div>
  </div>`;
}


function getSaveNoteTemplate(indexSaveNote) {
    return ` 
    <div class="note_content">
      <span class="title">${allNotes.saveNotesTitles[indexSaveNote]}</span> ▹ ${allNotes.saveNotes[indexSaveNote]} 
        <div class="btn">
          <button onclick= "moveNote(${indexSaveNote},'saveNotes','notes')"><img src="./assets/icon/top.png" alt="top"></button>
          <button onclick= "moveNote(${indexSaveNote},'saveNotes','trashNotes')"><img src="./assets/icon/trash_black.png" alt="trash"></button>
        </div>
    </div>`;
  }
  

function getTrashNoteTemplate(indexTrashNote) {
  return `
  <div class="note_content">
    <span class="title">${allNotes.trashNotesTitles[indexTrashNote]}</span> ▹ ${allNotes.trashNotes[indexTrashNote]}
      <div class="btn">
        <button onclick= "moveNote(${indexTrashNote},'trashNotes', 'notes');"><img src="./assets/icon/top.png" alt="top"></button>
        <button onclick= "deleteNote(${indexTrashNote})"><img src="./assets/icon/trash.png" alt="trash"></button>
      </div>
  </div>`;
}
