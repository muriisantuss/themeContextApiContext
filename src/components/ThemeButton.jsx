import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  let buttonText = "";

  if (theme === "light") {
    buttonText = "Mudar para Red Mode";
  } else if (theme === "red") {
    buttonText = "Mudar para Dark Mode";
  } else {
    buttonText = "Mudar para Light Mode";
  }

  return (
    <section>
      <button onClick={toggleTheme}>{buttonText}r</button>
    </section>
  );
}

export default ToggleButton;
