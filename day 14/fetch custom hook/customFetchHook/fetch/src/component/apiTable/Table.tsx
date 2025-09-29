import type { Todo } from "../../hooks/useApiData";
import styles from "./table.module.css";

interface Props {
  data: Todo[];
}
const Table = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th colSpan={4}>Todos</th>
          </tr>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td data-label="User Id">{item.userId}</td>
              <td data-label="Id">{item.id}</td>
              <td data-label="Title">{item.title}</td>
              <td data-label="Completed">
                {item.completed ? "True" : "False"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
