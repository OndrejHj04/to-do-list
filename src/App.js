import React from "react";
import Nav from "./Nav";
import Body from "./Body";
        // {Title: "", Description: "", Tags: "", State: ""}
export default function App() {

    const [allNotes, setAllNotes] = React.useState([])
    const [newNote, setNewNote] = React.useState({
        Title: "", Description: "", Tags: "", State: ""
    })
    function submit(){
        setAllNotes(oldVal=>{
            return [
                ...oldVal,
                newNote
            ]
        })
    }

    console.log(allNotes)


    function change(event){
        setNewNote(oldVal=>{
            return {
                ...oldVal,
                [event.target.name]: event.target.value
            }
        })
    }


  return (
    <div className="app">
        <Nav submit={submit} change={change}/>
        {!!allNotes.length && <Body allNotes={allNotes} />}
    </div>
  );
}
