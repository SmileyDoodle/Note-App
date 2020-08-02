import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Note(props) {

    

    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content} </p>
        <button className="deleteButton"
            onClick={() => {props.onPressed(props.id);}}
        > 
            <HighlightOffIcon /> 
        </button>
    </div>
    );
}

export default Note;