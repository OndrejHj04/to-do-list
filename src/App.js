import {useState , useEffect} from "react";
import Nav from "./Nav";
import Body from "./Body";
import { nanoid } from 'nanoid'


export default function App() {



    const [allNotes, setAllNotes] = useState(storage("todo").length ? storage("todo") : [])
    const [inProgress, setInProgress] = useState(storage("progress").length ? storage("progress") : [])
    const [finished, setFinished] = useState(storage("finished").length ? storage("finished") : [])

    const [newNote, setNewNote] = useState({
        Title: "", Description: "", Tags: [], State: "", id: nanoid()
    })

    function storage(type){
        return JSON.parse(localStorage.getItem(type))
    }

    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(allNotes))
    },[allNotes])

    useEffect(()=>{
        localStorage.setItem("progress", JSON.stringify(inProgress))
    },[inProgress])

    useEffect(()=>{
        localStorage.setItem("finished", JSON.stringify(finished))
    },[finished])


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

    function remove(event){
        let id = event.target.parentElement.lastChild.textContent
        setFinished(oldVal=>{
            let arr = []
            oldVal.map(item=>{
                if(item.id !== id) arr.push(item)
            })
            return arr
        })
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
        <Body allNotes={allNotes} pushNote={pushNote} inProgress={inProgress} finished={finished} remove={remove}/>
    </div>
  );
}
