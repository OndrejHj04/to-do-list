import React from "react";
import { nanoid } from "nanoid";

export default function Body(props) {
  const data = props.allNotes.map((item) => {
    let tagsArr = new Set(item.Tags);
    tagsArr = [...tagsArr];
    const tags = tagsArr.map((item) => {
      if (item) {
        return (
          <span className="tag-item" key={nanoid()}>
            {item}
          </span>
        );
      }
    });

    if(item.Description.length > 70){
      let space = item.Description.slice(60).indexOf(" ") + 60
      item.Description = item.Description.slice(0,space) + "..."

    }




    return (
      <div className="todos to-do" key={nanoid()}>
        <span className="item title-container">{item.Title}</span>
        <span className="item">{item.Description}</span>
        <span className="item tags-container">{tags}</span>
        <span className="item state" onClick={props.pushNote}>
          {item.State}
        </span>
        <span className="item">{item.id}</span>
      </div>
    );
  });

  const inProgress = props.inProgress.map((item) => {
    let tagsArr = new Set(item.Tags);
    tagsArr = [...tagsArr];
    const tags = tagsArr.map((item) => {
      if (item) {
        return (
          <span className="tag-item" key={nanoid()}>
            {item}
          </span>
        );
      }
    });

    return (
      <div className="todos in-progress" key={nanoid()}>
        <span className="item title-container">{item.Title}</span>
        <span className="item">{item.Description}</span>
        <span className="item tags-container">{tags}</span>
        <span className="item state" onClick={props.pushNote}>
          {item.State}
        </span>
        <span className="item">{item.id}</span>
      </div>
    );
  });

  const finished = props.finished.map((item) => {
    let tagsArr = new Set(item.Tags);
    tagsArr = [...tagsArr];
    const tags = tagsArr.map((item) => {
      if (item) {
        return (
          <span className="tag-item" key={nanoid()}>
            {item}
          </span>
        );
      }
    });

    return (
      <div className="todos in-progress" key={nanoid()}>
        <span className="item title-container">{item.Title}</span>
        <span className="item">{item.Description}</span>
        <span className="item tags-container">{tags}</span>
        <span className="item state" onClick={props.pushNote}>
          {item.State}
        </span>
        <span className="item">{item.id}</span>
      </div>
    );
  });



  return (
    <div className="container">
      <div className="description">
        <h1>TO do</h1>
      </div>
      <div className="list">
        <div>{data.length ? data : <div className="todos in-progress"></div>}</div>

        <div>
          <div className="description">
            <h1>In progress</h1>
          </div>

          <div>{inProgress.length ? inProgress : <div className="todos in-progress"></div>}</div>
        </div>

        <div>
          <div className="description">
            <h1>Finished</h1>
          </div>

          <div>{finished.length ? finished : <div className="todos in-progress"></div>}</div>
        </div>
      </div>
    </div>
  );
}
