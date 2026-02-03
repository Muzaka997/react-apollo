import GlobalStyle from "./styles/GlobalStyle";
import GitHubViewer from "./components/GitHubViewer";

function App() {
  return (
    <div className="app-root">
      <GlobalStyle />
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>My GitHub Repositories</h1>
      </header>

      <main>
        <GitHubViewer />
      </main>
    </div>
  );
}

export default App;
