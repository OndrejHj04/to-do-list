

export default function Nav(props){

  function createTags(event){
    props.change(event)
  }

    return(
        <div className="nav">
        <div className="title-container">
        <img src="./todo.png" className="todo-img"/>

          <h1 className="title">TO DO list</h1>
        </div>
        <form onSubmit={props.submit}>
          
        <div className="img-container">

            <input type="image" src="./plus.png" className="img" width="40" height="40"/>
          </div>

          <div className="form-container">
          <div className="form-item">
            <input type="text" className="inputs duty-input" placeholder="Duty" name="Title" onChange={(event)=>props.change(event)}/>
            <input type="text" className="inputs tags-input" placeholder="Tags" name="Tags" onChange={(event)=>createTags(event)}/>
            </div>
        <div>
            <input type="text" className="inputs desc-input" placeholder="Description" name="Description" onChange={(event)=>props.change(event)}/>
        </div>
          </div>

        </form>
      </div>
    )
}