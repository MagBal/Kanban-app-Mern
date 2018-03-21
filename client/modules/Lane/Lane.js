import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NoteContainer.js';
import Edit from '../../components/Edit';

// Import Style
import styles from './Lane.css';

class Lane extends React.Component {
  render() {  
    const { connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = this.props;
    const laneId = lane.id;

    return connectDropTarget(
      <div className={styles.Lane}>
        <div className={styles.LaneHeader}>
          <div className={styles.LaneDelete}>
            <button onClick={() => deleteLane(lane)}>X</button>
          </div>
          <Edit 
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(laneId)}
            onUpdate={name => updateLane({...lane, name, editing: false})}
          />
        </div>
        <div className={styles.LaneAddNote}>
            <button onClick={() => addNote({task: 'New Note'}, laneId)}>Add Note</button>
        </div>
        <NotesContainer
          notes={laneNotes}
          laneId={laneId}
        />
      </div>
    );
  };
}

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
};

export default Lane;