import React from "react";
import { nanoid } from 'nanoid'

export default function Body(props) {
  const data = props.allNotes.map((item) => {

    const tags = item.Tags.map(item=>{
      if(item)
      return <span className="tag-item" key={nanoid()}>{item}</span>
    })


    if(item.Title)
    return (
      <div className="todos to-do" key={nanoid()}>
        <span className="item">{item.Title}</span>
        <span className="item">{item.Description}</span>
        <span className="item tags-container">{tags}</span>
        <span className="item">{item.State}</span>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="description">
        <h1>TO do</h1>
      </div>
      <div className="list">
        <div>{data}</div>

        <div>
          <div className="description">
            <h1>In progress</h1>
          </div>

          <div className="todos in-progress">

          </div>
        </div>

        <div>
          <div className="description">
            <h1>Finished</h1>
          </div>

          <div className="todos finished">

          </div>
        </div>
      </div>
    </div>
  );
}
