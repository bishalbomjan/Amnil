import { useRef, useState } from "react";
import Button from "./Button";
import styles from "./form.module.css";
interface Props {
  label?: string;
  placeholder: string;
}
const Form = ({ label, placeholder }: Props) => {
  const [data, setData] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        {label && <label htmlFor="in">{label}</label>}
        <input
          onChange={(e) => setData(e.target.value)}
          className={`${styles.name}`}
          type="text"
          id="in"
          placeholder={placeholder}
        />
        <br />
        <Button buttonText="Click Me" varient="primary"></Button>
      </form>
    </>
  );
};

export default Form;
