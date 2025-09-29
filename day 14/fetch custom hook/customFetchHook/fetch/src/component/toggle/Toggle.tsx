import { useEffect, useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
    }
  };
  useEffect(() => {
    handleDarkMode();
  }, [darkMode]);
  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
};

export default Toggle;
