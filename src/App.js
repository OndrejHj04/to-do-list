import React from "react";

export default function App() {
  return (
    <div className="app">
      <div className="nav">
        <div className="title-container">
          <h1 className="title">TO DO list</h1>
          <div className="img-container">
          <img src="./plus.png" className="img"/>

          </div>
        </div>
        <form>
            <div className="form-item">
            <input type="text" className="inputs duty-input" placeholder="Duty"/>
            <input type="text" className="inputs tags-input" placeholder="Tags"/>
            </div>
        <div>
            <input type="text" className="inputs desc-input" placeholder="Description"/>
        </div>

        </form>
      </div>
      <div className="container">
        <div className="description">
          <h1>TO do</h1>
        </div>
        <div className="list">
          <div>
            <div className="todos to-do">
              <span className="item">Duty</span>
              <span className="item">Description</span>
              <span className="item">Tags</span>
              <span className="item">Finished</span>
            </div>
          </div>

          <div>
            <div className="description">
              <h1>In progress</h1>
            </div>

            <div className="todos in-progress">
              <span className="item">Duty</span>
              <span className="item">Description</span>
              <span className="item">Tags</span>
              <span className="item">Finished</span>
            </div>
          </div>

          <div>
            <div className="description">
              <h1>Finished</h1>
            </div>

            <div className="todos finished">
              <span className="item">Duty</span>
              <span className="item">Description</span>
              <span className="item">Tags</span>
              <span className="item">Finished</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
