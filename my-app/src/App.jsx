import Header from "./components/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
