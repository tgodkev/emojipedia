import React from "react";
import Note from "./Note";
import emojipedia from "../emojipedia";


function createNote(emojipedia){
  return(
    <Note 
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createNote)}
      </dl>
    </div>
  );
}

export default App;
