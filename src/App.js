import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import { nanoid } from 'nanoid'


export default function App() {

    const [allNotes, setAllNotes] = React.useState([])
    const [inProgress, setInProgress] = React.useState([])
    const [finished, setFinished] = React.useState([])

    const [newNote, setNewNote] = React.useState({
        Title: "", Description: "", Tags: [], State: "", id: nanoid()
    })

    function submit(event){
        event.preventDefault()
        let inputs = document.querySelectorAll(".inputs")
        inputs.forEach(item=>{
            item.value = ""
        })
        if(newNote.Title)
        setAllNotes(oldVal=>{
            return [
                ...oldVal,
                newNote
            ]
        })
        setNewNote({Title: "", Description: "", Tags: [], State: "", id: nanoid()})
    }

    function pushNote(event){
        let parent = event.target.parentElement.lastChild.textContent
        if(event.target.parentElement.querySelector(".state").textContent === "Start working"){
            let val
            setAllNotes(oldVal=>{
                let newArr = []
                oldVal.map(item=>{
                    if(item.id !== parent) newArr.push(item)
                    if(item.id === parent) val = item
                })
    
                return newArr
            })
            setInProgress(oldVal=>{
                val.State = "Finished!"
    
                return [
                    ...oldVal,
                    val
                ]
            })
        }else if(event.target.parentElement.querySelector(".state").textContent === "Finished!"){
            let val
            setInProgress(oldVal=>{
                let newArr = []
                oldVal.map(item=>{
                    if(item.id !== parent) newArr.push(item)
                    if(item.id === parent) val = item
                })
    
                return newArr
            })
            setFinished(oldVal=>{
                val.State = ""
    
                return [
                    ...oldVal,
                    val
                ]
            })
        }

    }



    function change(event){
        setNewNote(oldVal=>{
            if(event.target.name === "Tags"){
                let arr = event.target.value.split(" ")
                return {
                    ...oldVal,
                    [event.target.name]: arr,
                    State: "Start working"
                }
            }else{
                return {
                    ...oldVal,
                    [event.target.name]: event.target.value,
                    State: "Start working"

                }
            }

        })
    }


  return (
    <div className="app">
        <Nav submit={submit} change={change}/>
        <Body allNotes={allNotes} pushNote={pushNote} inProgress={inProgress} finished={finished}/>
    </div>
  );
}
