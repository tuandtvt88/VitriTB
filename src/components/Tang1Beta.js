import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T1.png";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export function Tang1Beta() {
    const wifiLocations = [
        { name: "AP-BT-Phong AI", top: "17%", left: "15%" },
        { name: "AP-BT-IT-ACP", top: "17%", left: "37%" },
        { name: "Phòng họp", top: "15%", left: "62%" },
        { name: "AP-BT-Sales-U6P", top: "15%", left: "75%" },
        { name: "AP-BT-CTSV-U6", top: "13%", left: "88%" },
        { name: "AP-BT-SanTruong-01-U6", top: "28%", left: "55%" },
        { name: "AP-BT-SanTruong-03-ACP", top: "50%", left: "64%" },
        { name: "AP-BT-FU-U6P", top: "86%", left: "80%" },
        { name: "AP-BT-SanTruong-02-U6P", top: "78%", left: "40%" },
        { name: "AP-BT-Server-ACP", top: "94%", left: "15%" },
        { name: "Thư viện-01", top: "83%", left: "14%" },
        { name: "Thư viện-02", top: "53%", left: "14%" },
        { name: "Thư viện-03", top: "33%", left: "14%" },
        
    ];

    return (
        <div className="tang1beta">
            <div className="map-container">
            <img src={image} alt="Tang 1 Beta" className="map-image" />
            {wifiLocations.map((wifi, index) => (
                <div
                    key={index}
                    className="wifi-marker"
                    style={{ top: wifi.top, left: wifi.left }}
                >
                    <Wifi className="wifi-icon" size={28} color="green" />
                    <div className="wifi-name">{wifi.name}</div>
                </div>
            ))}
            </div>
        </div>
    );
}
