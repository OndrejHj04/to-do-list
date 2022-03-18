import React from "react";
import Nav from "./Nav";
import Body from "./Body";
        // {Title: "", Description: "", Tags: "", State: ""}
export default function App() {

    const [allNotes, setAllNotes] = React.useState([])
    const [newNote, setNewNote] = React.useState({
        Title: "", Description: "", Tags: [], State: "Start working"
    })
    const [inProgress, setInProgress] = React.useState([])

    function submit(){
        let inputs = document.querySelectorAll(".inputs")
        inputs.forEach(item=>{
            item.value = ""
        })
        setAllNotes(oldVal=>{
            return [
                ...oldVal,
                newNote
            ]
        })
        setNewNote({})
    }

    function stateChange(event){
        setInProgress(oldVal=>{
            return [
                ...oldVal,
                newNote
            ]
        })
    }

    function change(event){
        setNewNote(oldVal=>{
            if(event.target.name === "Tags"){
                let arr = event.target.value.split(" ")
                return {
                    ...oldVal,
                    [event.target.name]: arr
                }
            }else{
                return {
                    ...oldVal,
                    [event.target.name]: event.target.value
                }
            }

        })
    }


  return (
    <div className="app">
        <Nav submit={submit} change={change}/>
        {!!allNotes.length && <Body allNotes={allNotes} stateChange={stateChange} inProgress={inProgress}/>}
    </div>
  );
}
