import {useState} from 'react';

const Create=( {handleCreatenote})=>{

    const [notetext,setNotetext]=useState('');
    const charlimit=300;

    const handleChange=(event)=>{
        if(charlimit-event.target.value.length>=0){
            setNotetext(event.target.value);
        }
    };
    
    const handleSaveClick=()=>{
        if(notetext.trim().length>0){
        handleCreatenote(notetext);
        setNotetext('');
        }
    };

    return (
        <div className='newnote'>
            <textarea className='textarea' 
            rows='8' cols='10' 
            placeholder='Begin your notes here ya...'
            value={notetext}
            onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{charlimit-notetext.length} chars remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
    </div>
    );
};

export default Create;