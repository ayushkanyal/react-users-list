import style from "./Form.module.css";
import { useState } from "react";

export default function Form(props) {
  const initialValue = {
    username: "",
    age: "",
  }
  const [inputs, setInputs] = useState(initialValue);
  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(inputs);
    setInputs(initialValue);
  }

  function handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={inputs.username}
        onChange={handleChange}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        type="number"
        value={inputs.age}
        id="age"
        onChange={handleChange}
      />
      <button className={style.button} type="submit" onChange={handleChange}>
        Add User
      </button>
    </form>
  );
}
