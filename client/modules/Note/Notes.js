import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';
import styles from './Note.css';


const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane }) => {
  return (
    <ul className={styles.notes}>
      {notes.map((note, id) => 
        <Note
          id={note.id}
          key={note.id || id} 
          editing={note.editing} 
          moveWithinLane={moveWithinLane}
          laneId={laneId}
          _id={note._id}
        >
          <Edit
            editing={note.editing}
            value={note.task}
            onValueClick={() => editNote(note.id)}
            onUpdate={(task) => updateNote({
                ...note,
                task,
                editing: false
              }
            )}
            onDelete={() => deleteNote(note.id, laneId)}
          />
        </Note>
      )}
    </ul>
  );
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
  moveWithinLane: PropTypes.func,
};

export default Notes;