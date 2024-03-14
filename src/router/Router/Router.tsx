import { useRoutePaths } from "@/hooks/useRoutePaths";
import { Routes, Route } from "react-router-dom";
import { MultiStep } from "@/pages";
const { HOME } = useRoutePaths();

export default function Router() {
  return (
    <Routes>
      <Route path={HOME} element={<MultiStep />} />
    </Routes>
  );
}
