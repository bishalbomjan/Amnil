import styles from "./styles.module.css";
interface Props {
  handlePop: (pop: boolean) => void;
}
const PopBox = ({ handlePop }: Props) => {
  return (
    <div className={styles.containerBox}>
      <h2>Model is Poped</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        provident!
        <button
          className={[styles.btn, styles.btnDanger, styles.btnAbsolute].join(
            " "
          )}
          onClick={() => handlePop(false)}
        >
          X
        </button>
      </p>
    </div>
  );
};

export default PopBox;
