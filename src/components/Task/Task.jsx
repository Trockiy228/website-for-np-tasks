import { TASKS } from "../../data/Tasks";
import { useParams } from "react-router-dom";
import styles from "./Task.module.css";

export const Task = () => {
  const { id } = useParams();

  const task = TASKS[id - 1] ?? null;

  return (
    <div className={styles.pageContainer}>
      <h1>{task.name}</h1>
      <p className={styles.desc}>{task.desc}</p>
      <div>
        <img src={task.img} alt="data" className={styles.img} />
      </div>
    </div>
  );
};
