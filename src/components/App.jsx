import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { isPropertySignature } from "typescript";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(previousNotes => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(previousNotes => {
      return previousNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div id="page-container">
      <Header />
      <main id="content-wrap">
          <CreateArea 
              onAdd={addNote}
          />
          <div className="note-wrap">
              {notes.map((noteItem, index) => (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onPressed={deleteNote}
                />
              ))}
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;