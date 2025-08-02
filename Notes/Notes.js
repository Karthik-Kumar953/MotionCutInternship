document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    const noteTitleInput = document.getElementById("noteTitle");
    const noteContentInput = document.getElementById("noteContent");
    const saveNoteBtn = document.getElementById("saveNoteBtn");
    const clearFormBtn = document.getElementById("clearFormBtn");
    const editNoteIdInput = document.getElementById("editNoteId");
    const searchNotesInput = document.getElementById("searchNotes");
    const notesList = document.getElementById("notesList");

    // Initialize notes array from local storage or empty array
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Display all notes on page load
    displayNotes(notes);

    // Save note event
    saveNoteBtn.addEventListener("click", function () {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();
        const editNoteId = editNoteIdInput.value;

        if (!title || !content) {
            alert("Please enter both title and content");
            return;
        }

        if (editNoteId) {
            // Update existing note
            const noteIndex = notes.findIndex((note) => note.id === editNoteId);
            if (noteIndex > -1) {
                notes[noteIndex] = {
                    ...notes[noteIndex],
                    title,
                    content,
                    updatedAt: new Date().toISOString(),
                };
            }
        } else {
            // Add new note
            const newNote = {
                id: Date.now().toString(),
                title,
                content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            notes.unshift(newNote); // Add to beginning of array
        }

        // Save to local storage and update display
        saveNotes();
        clearForm();
        displayNotes(notes);
    });

    // Clear form event
    clearFormBtn.addEventListener("click", clearForm);

    // Search notes event
    searchNotesInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        if (searchTerm) {
            const filteredNotes = notes.filter(
                (note) =>
                    note.title.toLowerCase().includes(searchTerm) ||
                    note.content.toLowerCase().includes(searchTerm)
            );
            displayNotes(filteredNotes);
        } else {
            displayNotes(notes);
        }
    });

    // Function to display notes
    function displayNotes(notesToDisplay) {
        if (notesToDisplay.length === 0) {
            notesList.innerHTML = `
                <div class="empty-notes">
                    <i class="fas fa-book-open"></i>
                    <p>No notes found. Add your first note above!</p>
                </div>
            `;
            return;
        }

        notesList.innerHTML = notesToDisplay
            .map(
                (note) => `
            <div class="note-card" data-id="${note.id}">
                <h3 class="note-title">${note.title}</h3>
                <p class="note-content">${note.content}</p>
                <p class="note-date">
                    ${new Date(note.updatedAt).toLocaleString()}
                    ${note.createdAt !== note.updatedAt ? " (edited)" : ""}
                </p>
                <div class="note-actions">
                    <button class="edit-btn" onclick="editNote('${note.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="delete-btn" onclick="deleteNote('${
                        note.id
                    }')">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
            </div>
        `
            )
            .join("");
    }

    // Function to save notes to local storage
    function saveNotes() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    // Function to clear the form
    function clearForm() {
        noteTitleInput.value = "";
        noteContentInput.value = "";
        editNoteIdInput.value = "";
        saveNoteBtn.textContent = "Save Note";
    }

    // Global functions for note actions (needed for inline event handlers)
    window.editNote = function (noteId) {
        const noteToEdit = notes.find((note) => note.id === noteId);
        if (noteToEdit) {
            noteTitleInput.value = noteToEdit.title;
            noteContentInput.value = noteToEdit.content;
            editNoteIdInput.value = noteToEdit.id;
            saveNoteBtn.textContent = "Update Note";
            noteTitleInput.focus();
        }
    };

    window.deleteNote = function (noteId) {
        if (confirm("Are you sure you want to delete this note?")) {
            notes = notes.filter((note) => note.id !== noteId);
            saveNotes();
            displayNotes(notes);
            if (editNoteIdInput.value === noteId) {
                clearForm();
            }
        }
    };
});
