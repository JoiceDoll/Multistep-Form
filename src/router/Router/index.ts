import { Routes, Route } from "react-router-dom";
import { MultiStep } from "@/pages";

export default function Router() {
    return (
      <Routes>
        <Route path={HOME_PATH} element={<MultiStep />} />
        
      </Routes>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );