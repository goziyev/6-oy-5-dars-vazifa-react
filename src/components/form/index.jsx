import { Fragment, useState, useEffect } from "react";
import Todo from "../todo-card";
import InputAndButton from "../todo-input";
import { LocalStoragePush, LocalStorageGet, validate } from "./indexForm";
import style from  "./main.module.css";

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
      id: Date.now().toString(),
    };
    if (validate(input)) {
      data.push(card);
      LocalStoragePush(data);
    }
    setInput("");
    setData(LocalStorageGet());
  }

  return (
    <div className={style.formContainer}>
      <h1>
        Todos <strong style={{ color: "red" }}> {data.length}</strong>
      </h1>
     <InputAndButton input ={input} setInput = {setInput} handleClick = {handleClick} />

      <div className={style.todoCards}>
        {localStorage.getItem("todos") &&
          data.map((el, index) => {
            return (
              <Fragment key={index}>
                <Todo
                  name={el.name}
                  dataId={el.id}
                  handleDelate={handleDelate}
                />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
