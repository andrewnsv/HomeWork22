import Page from "./components/Page";

import HttpHeroesProvider from "./providers/HttpHeroesProvider";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <HttpHeroesProvider>
        <Page />
      </HttpHeroesProvider>
    </ThemeProvider>
  );
}

export default App;
