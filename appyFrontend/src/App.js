import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import MyNotes from './components/MyNotes';
import Search from './components/Search';
import Header from './components/Header';
// function App() {
//   return (
//     <div className="App">
//       <Lmth/>
//     </div>
//   );
// }


const App =() =>{
const [notes,setNotes]= useState([{

}]);


const [searchtext,setSearchtext]= useState('');

const [dark,setDark]=useState(false);

const createnote = (text)=>
{
const date= new Date();
const newnote ={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
};
const newNotes=[...notes,newnote];
setNotes(newNotes);
};

const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id);
    setNotes(newNotes);

}



  return (
    <div className={`${dark && 'dark-mode'}`}>
    <div className="container">
      <Header handleDark={setDark}/>
      <Search handleSearchnote={setSearchtext}/>
      <MyNotes 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))} 
      handleCreatenote={createnote}
      handleDeletenote={deleteNote}

      />
    </div>
    </div>

  );
}

export default App;
