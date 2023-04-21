import styles from "../style.module.css";
const Todo = ({ todoItem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter(item => item.id !== todoItem.id));
  };
  return (
    <div className={styles.todoComponent}>
      <div>
        <h3 className={styles.todoItem}>{todoItem.name}</h3>
        <div className={styles.btnGroup}>
          <button className={styles.btnDone} onClick={handleDelete}>
            Done
          </button>
          <button className={styles.btnDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
