import React from "react";

export default function Body(props) {
  const data = props.allNotes.map((item) => {

    return (
<div className="todos to-do">
        <span className="item">{item.Title}</span>
        <span className="item">{item.Description}</span>
        <span className="item">{item.Tags}</span>
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
        <div>
          {data}
        </div>

        <div>
          <div className="description">
            <h1>In progress</h1>
          </div>

          <div className="todos in-progress">
            {/* <span className="item">Duty</span>
            <span className="item">Description</span>
            <span className="item">Tags</span>
            <span className="item">Finished</span> */}
          </div>
        </div>

        <div>
          <div className="description">
            <h1>Finished</h1>
          </div>

          <div className="todos finished">
            {/* <span className="item">Duty</span>
            <span className="item">Description</span>
            <span className="item">Tags</span>
            <span className="item">Finished</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
