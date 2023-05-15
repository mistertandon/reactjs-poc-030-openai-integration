import "./App.scss";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContentGenerator } from "./components/index";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ContentGenerator />
      </ThemeProvider>
    </div>
  );
}

export default App;
