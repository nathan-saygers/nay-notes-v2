import React from 'react';

const NoteCard = props => {

  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.tag}</p>
      <p>{props.body}</p>
    </div>
  )
}

export default NoteCard;