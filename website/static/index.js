function deleteNote(noteId) {
  console.log("pi-coding-logs: deleteNote called with noteId:", noteId);

  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/"; // Refresh the page after deletion
  });
}
