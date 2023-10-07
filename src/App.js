import { useState } from "react";
import List from "./components/Output/List";
import Form from "./components/Input/Form";
import ErrorModal from "./components/Output/ErrorModal";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState([]);

  function handleClick() {
    setError(false);
  }

  function fetchSubmit(input) {
    console.log(input.username.length);
    console.log(input.age.length);
    if (input.username.length === 0) {
      setError({
        title: "Invalid Username",
        message: "Please Enter a valid Name.",
      });
      return;
    }
    if (input.age <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid Age(>0).",
      });
      return;
    } else {
      setName((values) => [...values, input.username]);
      setAge((values) => [...values, input.age]);
      setInputs((values) => [...values, input]);
    }
  }

  return (
    <div>
      <Form onAdd={fetchSubmit} />
      <List list={inputs} />
      {error && (
        <ErrorModal
          title={error.title}
          text={error.message}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
