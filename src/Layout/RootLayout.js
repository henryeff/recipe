import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

function Main({ children }) {
  return <div style={{ padding: 20 }}>{children}</div>;
}

function RootLayout({ setIsLogin }) {
  return (
    <div>
      <NavBar setIsLogin={setIsLogin} />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default RootLayout;
