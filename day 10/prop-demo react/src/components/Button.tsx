import styles from "./btn.module.css";
interface Props {
  buttonText: string;
  varient: "primary" | "secondary";
}
const Button = ({ buttonText, varient }: Props) => {
  return (
    <>
      <button className={`${styles.btn} ${styles[varient]}`}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
