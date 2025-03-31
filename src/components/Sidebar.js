import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Nút mở Sidebar trên mobile */}
            <button className="menu-button" onClick={() => setIsOpen(true)}>
                ☰
            </button>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                {/* Nút đóng chỉ hiển thị trên mobile */}
                <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                <div className="sidebar-title">Vị trí AP nhà Beta</div>

                <nav className="sidebar-menu">
                    <SidebarButton to="/tang1beta" text="Tầng 1 Beta" />
                    <SidebarButton to="/tang2beta" text="Tầng 2 Beta" />
                    <SidebarButton to="/tang3beta" text="Tầng 3 Beta" />
                    <SidebarButton to="/tang4beta" text="Tầng 4 Beta" />
                    <SidebarButton to="/tang5beta" text="Tầng 5 Beta" />
                </nav>
                <br></br>
                <div className="sidebar-title">Vị trí AP nhà Gamma</div>

                <nav className="sidebar-menu">
                    <SidebarButton to="/tang1gamma" text="Tầng 1 Gamma" />
                    <SidebarButton to="/tang2gamma" text="Tầng 2 Gamma" />
                    <SidebarButton to="/tang3gamma" text="Tầng 3 Gamma" />
                    <SidebarButton to="/tang4gamma" text="Tầng 4 Gamma" />
                    <SidebarButton to="/tang5gamma" text="Tầng 5 Gamma" />
                      </nav>
            </div>
        </>
    );
}

function SidebarButton({ to, text }) {
    return (
        <Link to={to} className="sidebar-button">
            {text}
        </Link>
    );
}
