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
                <div className="sidebar-title">Danh sách các tầng</div>

                <nav className="sidebar-menu">
                    <SidebarButton to="/tang1beta" text="Tầng 1 Beta" />
                    <SidebarButton to="/tang2beta" text="Tầng 2 Beta" />
                    <SidebarButton to="/tang3beta" text="Tầng 3 Beta" />
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
