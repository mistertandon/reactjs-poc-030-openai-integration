import "./App.scss";
import ErrorBoundary from "./errors/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContentGenerator } from "./components/index";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeProvider>
          <ContentGenerator />
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
