import "./App.css";
import ToggleButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <h1>Teste</h1>
      <ToggleButton />
    </ThemeProvider>
  );
}
