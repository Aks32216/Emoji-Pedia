import React from "react";

function Emojicard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.defination}</dd>
    </div>
  );
}

export default Emojicard;
