import React from "react";
import delate from "../../assets/download.jpg";
import style from '../form/main.module.css';

export default function Todo({name,dataId,handleDelate}) {
  return (
    <div className={style.card}>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <img
          src={delate}
          alt=""
          onClick={() => {
            handleDelate(dataId);
          }}
        />
      </div>
    </div>
  );
}
