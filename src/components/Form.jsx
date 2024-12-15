import { useState } from "react";
const Form = (props) => {
  const [inputText, setInputText] = useState("");
  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputText !== "") {
      props.addTask(inputText);
      setInputText("");
      setTimeout(() => {
        e.target.checked = false;
      }, 300);
    }
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <label className="checkbox-wrapper">
        <input type="checkbox" id="newTodo" onChange={handleSubmit} />
        <span className="checkmark"></span>
      </label>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Create a new todo..."
        autoComplete="off"
        value={inputText}
        onChange={handleChange}
        // onKeyPress={checkSubmit}
      />
    </form>
  );
};

export default Form;
