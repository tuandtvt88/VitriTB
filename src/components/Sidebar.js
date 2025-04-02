import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isBetaOpen, setIsBetaOpen] = useState(false);
    const [isGammaOpen, setIsGammaOpen] = useState(false);

    return (
        <>
            {/* Nút mở Sidebar trên mobile */}
            <button className="menu-button" onClick={() => setIsSidebarOpen(true)}>
                ☰
            </button>

            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                {/* Nút đóng Sidebar */}
                <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>✖</button>

                {/* Nút toggle danh sách Beta */}
                <button className="toggle-button" onClick={() => setIsBetaOpen(!isBetaOpen)}>
                    Vị trí AP nhà Beta {isBetaOpen ? "▲" : "▼"}
                </button>
                {isBetaOpen && (
                    <nav className="sidebar-menu">
                        <SidebarButton to="/tang1beta" text="Tầng 1 Beta" />
                        <SidebarButton to="/tang2beta" text="Tầng 2 Beta" />
                        <SidebarButton to="/tang3beta" text="Tầng 3 Beta" />
                        <SidebarButton to="/tang4beta" text="Tầng 4 Beta" />
                        <SidebarButton to="/tang5beta" text="Tầng 5 Beta" />
                    </nav>
                )}

                {/* Nút toggle danh sách Gamma */}
                <button className="toggle-button" onClick={() => setIsGammaOpen(!isGammaOpen)}>
                    Vị trí AP nhà Gamma {isGammaOpen ? "▲" : "▼"}
                </button>
                {isGammaOpen && (
                    <nav className="sidebar-menu">
                        <SidebarButton to="/tang1gamma" text="Tầng 1 Gamma" />
                        <SidebarButton to="/tang2gamma" text="Tầng 2 Gamma" />
                        <SidebarButton to="/tang3gamma" text="Tầng 3 Gamma" />
                        <SidebarButton to="/tang4gamma" text="Tầng 4 Gamma" />
                        <SidebarButton to="/tang5gamma" text="Tầng 5 Gamma" />
                    </nav>
                )}
  <Link to="/thongke" className="stat-button">
    Thống kê số lượng wifi
</Link>
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
