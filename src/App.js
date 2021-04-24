import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer>
          <small>Coded by Ana Karina Ornelas </small>open-sourced on{" "}
          <a href="https://github.com/karinaornelas24/dictionary-project">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
