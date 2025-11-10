import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="p-4">
        <Menu />
        <Outlet />
      </main>
    </>
  );
}

export default App;
