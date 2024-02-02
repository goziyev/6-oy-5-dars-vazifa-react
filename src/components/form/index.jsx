import {Fragment, useState, useEffect } from "react";
import delate from "../../assets/download.jpg";
import { LocalStoragePush, LocalStorageGet,validate } from "./indexForm";
import "./main.css";

export default function Form() {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const letData = JSON.parse(localStorage.getItem("todos"));
      setData(letData);
    }
  }, []);
  function handleDelate(dataId) {
    const delate = data.filter((el) => el.id !== dataId);
    setData(delate);
    LocalStoragePush(delate);
  }



  function handleClick(e) {
    e.preventDefault();
    let card = {
      name: input,
      id: Date.now().toString()
    };
    if (validate(input)) {
      data.push(card);
      LocalStoragePush(data);
    }
    setInput("");
    setData(LocalStorageGet());
  }

  return (
    <div className="form-container">
      <h1>
        Todos <strong style={{ color: "red" }}> {data.length}</strong>
      </h1>
      <div className="form">
        <form className="form-form">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Enter todo here"
            maxLength={30}
          />
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>

      <div className="todos-cards">
        {localStorage.getItem("todos") &&
          data.map((el, index) => {
            return (
              <Fragment key={index}>
                <div className="card">
                  <div>
                    <p>{el.name}</p>
                  </div>
                  <div>
                    <img
                      src={delate}
                      alt=""
                      onClick={() => {
                        handleDelate(el.id);
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
