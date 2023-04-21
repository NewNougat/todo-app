import styles from "../style.module.css";
import shortid from "shortid";
const Form = ({ todo, todoList, setTodo, setTodoList }) => {
  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div className={styles.formComponent}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Todo</label>
        <input
          type="text"
          className={styles.input}
          onChange={handleChange}
          value={todo}
          placeholder="Add To Do"
        ></input>
        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
