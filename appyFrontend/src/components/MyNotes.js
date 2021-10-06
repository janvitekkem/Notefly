import Note from './Note'
import Create from './Create'


const MyNotes =({notes , handleCreatenote,handleDeletenote})=>{
    return (
    <div className='mynotes'>
        {
        notes.map((note)=>(
        <Note id={note.id} text={note.text} date={note.date} handleDeletenote={handleDeletenote} />
        ))
        }
        <Create handleCreatenote={handleCreatenote}/>
        
    </div>
    );
};


export default MyNotes ;
// map filter reduce
