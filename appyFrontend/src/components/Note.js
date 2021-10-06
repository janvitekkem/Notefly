
const Note=({id,text,date,handleDeletenote})=>{

        return (
            <div className='note'>
                <span>{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <button className='delete' size='1.3em' onClick={()=> handleDeletenote(id)}><i class="fas fa-trash"></i></button>
                </div>
            </div>
        )
    };

export default Note
