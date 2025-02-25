import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <section>
      <button onClick={toggleTheme}>Change color backgroundColor</button>
    </section>
  );
}

export default ToggleButton;
