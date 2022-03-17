import React from "react";

export default function Nav(props){
    return(
        <div className="nav">
        <div className="title-container">
          <h1 className="title">TO DO list</h1>
          <div className="img-container" onClick={props.submit}>
          <img src="./plus.png" className="img"/>

          </div>
        </div>
        <form>
            <div className="form-item">
            <input type="text" className="inputs duty-input" placeholder="Duty" name="Title" onChange={(event)=>props.change(event)}/>
            <input type="text" className="inputs tags-input" placeholder="Tags" name="Tags" onChange={(event)=>props.change(event)}/>
            </div>
        <div>
            <input type="text" className="inputs desc-input" placeholder="Description" name="Description" onChange={(event)=>props.change(event)}/>
        </div>

        </form>
      </div>
    )
}