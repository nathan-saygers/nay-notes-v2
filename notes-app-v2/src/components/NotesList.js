import React from 'react';

import NoteCard from './NoteCard';

const NotesList = props => {
  console.log('props into NotesList', props.notes)

  return(   
    <div>
      {props.notes.map((note) => 
        <NoteCard 
          id={note.id}
          title={note.title}
          body={note.body}
          tag={note.type}
        />
      )}
    </div>
  )
}

export default NotesList;