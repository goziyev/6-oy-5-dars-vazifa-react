import style from '../form/main.module.css'

import React from 'react'

export default function InputAndButton({input,setInput,handleClick}) {
  return (
    <div className={style.form}>
    <form className={style.formWrapper}>
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
  )
}
