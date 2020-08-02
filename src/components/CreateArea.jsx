import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
      title: "",
      content: ""
  });

  function handleChange(event) {
      const {name, value} = event.target;
      
      setNote(previousNote => {
        return {...previousNote, [name]: value};
      });
  }

  function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
    });

      event.preventDefault();
  }

  const [expand, setExpand] = useState(false);

  function expanded(){
    setExpand(true);
  }



  return (
    <div>
      <form className="create-note" onSubmit={e => e.preventDefault()}>
        {expand && 
            <input 
            name="title" 
            placeholder="Title"
            value={note.title} 
            onChange={handleChange} 
            autoFocus
        />}
        <textarea 
            name="content" 
            placeholder="Take a note..."
            value={note.content} 
            rows={expand ? 3 : 1}
            onChange={handleChange}
            onClick={expanded}
            />
        <Zoom in={ expand ? true : false}>
            <Fab
                onClick={submitNote}
            >
            <AddIcon /> 
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;