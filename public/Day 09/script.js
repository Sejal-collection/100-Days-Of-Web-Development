        // --- DATA MANAGEMENT ---

        // 1. Get notes from LocalStorage or initialize empty array
        let notes = JSON.parse(localStorage.getItem('quicknotes-app')) || [];
        let isEditing = false;
        let currentEditId = null;

        const appContainer = document.getElementById('app');
        const searchInput = document.getElementById('search-input');

        // Modal Elements
        const modalOverlay = document.getElementById('modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const titleInput = document.getElementById('note-title');
        const bodyInput = document.getElementById('note-body');
        const saveBtn = document.getElementById('save-btn');
        const cancelBtn = document.getElementById('cancel-btn');

        // --- FUNCTIONS ---

        // Save to Browser's LocalStorage
        function saveToLocalStorage() {
            localStorage.setItem('quicknotes-app', JSON.stringify(notes));
        }

        // Generate a unique ID (Timestamp)
        function generateId() {
            return Date.now().toString();
        }

        // Get Current Date formatted
        function getCurrentDate() {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date().toLocaleDateString('en-US', options);
        }

        // Render Notes to HTML
        function renderNotes(notesToRender) {
            appContainer.innerHTML = '';

            // Always add the "Add New" button as the first card
            const addCard = document.createElement('div');
            addCard.className = 'note-card add-note-card';
            addCard.innerHTML = `
                <span class="add-icon">+</span>
                <span>Add New Note</span>
            `;
            addCard.addEventListener('click', () => openModal());
            appContainer.appendChild(addCard);

            // Render existing notes
            notesToRender.forEach(note => {
                const noteEl = document.createElement('div');
                noteEl.className = 'note-card';
                noteEl.innerHTML = `
                    <div>
                        <div class="note-title">${note.title}</div>
                        <div class="note-body">${note.body}</div>
                    </div>
                    <div class="note-footer">
                        <span>${note.date}</span>
                        <div class="btn-group">
                            <button class="icon-btn" onclick="editNote('${note.id}')">✏️</button>
                            <button class="icon-btn delete-btn" onclick="deleteNote('${note.id}')">🗑️</button>
                        </div>
                    </div>
                `;
                appContainer.appendChild(noteEl);
            });
        }

        // --- MODAL LOGIC ---

        function openModal(editMode = false, noteId = null) {
            modalOverlay.classList.add('active');

            if (editMode) {
                // Find note data to pre-fill
                const note = notes.find(n => n.id === noteId);
                titleInput.value = note.title;
                bodyInput.value = note.body;
                modalTitle.textContent = "Edit Note";
                isEditing = true;
                currentEditId = noteId;
            } else {
                // Clear inputs for new note
                titleInput.value = '';
                bodyInput.value = '';
                modalTitle.textContent = "Add Note";
                isEditing = false;
                currentEditId = null;
            }
            titleInput.focus();
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        function handleSave() {
            const title = titleInput.value.trim() || 'Untitled Note';
            const body = bodyInput.value.trim();

            if (!body && !title) {
                alert("Note cannot be empty!");
                return;
            }

            if (isEditing) {
                // Update existing note
                notes = notes.map(n => 
                    n.id === currentEditId ? { ...n, title, body, date: getCurrentDate() } : n
                );
            } else {
                // Create new note
                const newNote = {
                    id: generateId(),
                    title,
                    body,
                    date: getCurrentDate()
                };
                // Add to beginning of array
                notes.unshift(newNote);
            }

            saveToLocalStorage();
            renderNotes(notes);
            closeModal();
        }

        // --- GLOBAL ACTIONS (Exposed to window for onclick in HTML) ---

        window.deleteNote = function(id) {
            if(confirm("Are you sure you want to delete this note?")) {
                notes = notes.filter(n => n.id !== id);
                saveToLocalStorage();
                renderNotes(notes);
            }
        };

        window.editNote = function(id) {
            openModal(true, id);
        };

        // --- EVENT LISTENERS ---

        saveBtn.addEventListener('click', handleSave);
        cancelBtn.addEventListener('click', closeModal);

        // Close modal if clicking outside the white box
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Search Filter
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filteredNotes = notes.filter(n => 
                n.title.toLowerCase().includes(term) || 
                n.body.toLowerCase().includes(term)
            );
            renderNotes(filteredNotes);
        });

        // Initial Render
        renderNotes(notes);
