import { Link } from "react-router-dom";
import { TASKS } from "../../data/Tasks";
import styles from "./TasksList.module.css";

const CARDS_COLORS = ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70"];

export const TasksList = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>
        Результаты применения симуляции когерентной машины Изинга на известных
        NP задачах
      </h1>
      <div className={styles.cards}>
        {TASKS.map((task, i) => (
          <Link
            to={`${i + 1}`}
            className={styles.card}
            style={{
              backgroundColor: `${CARDS_COLORS[i % CARDS_COLORS.length]}`,
            }}
          >
            <div className={styles.name}>{task.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
