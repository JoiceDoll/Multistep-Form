import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./shared";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
