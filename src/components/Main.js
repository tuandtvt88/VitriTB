import { Outlet } from "react-router-dom";
import './Main.css'
export function Main({ children }) {
    return (
      <div className="main">
        <Outlet/>
      </div>
    );
  }