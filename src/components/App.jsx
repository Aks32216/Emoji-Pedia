import React from "react";
import emojipedia from "../emojipedia";
import Emojicard from "./emojicards";

function createemoji(emojiList) {
  return (
    <Emojicard
      key={emojiList.id}
      emoji={emojiList.emoji}
      name={emojiList.name}
      defination={emojiList.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createemoji)}</dl>
    </div>
  );
}

export default App;
