import NavBar from "../Components/Nav_Bar/NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
