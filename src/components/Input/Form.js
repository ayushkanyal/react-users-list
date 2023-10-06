import style from "./Form.module.css";
import { useState } from "react";

export default function Form(props) {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(inputs);
  }

  function handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        value={inputs.username}
        onChange={handleChange}
      />
      <label for="age">Age (Years)</label>
      <input
        type="number"
        value={inputs.age}
        id="age"
        onChange={handleChange}
      />
      <button type="submit" onChange={handleChange}>
        Add User
      </button>
    </form>
  );
}
