import useApiData from "../../hooks/useApiData";
import Table from "./Table";
import styles from "./apiTable.module.css";

const ApiTable = () => {
  const { data, error } = useApiData();
  return (
    <>
      <h1 className={styles.heading}>Todo Table</h1>
      {error && <p className={styles.errorText}>{error}</p>}
      {!error && <Table data={data} />}
    </>
  );
};

export default ApiTable;
