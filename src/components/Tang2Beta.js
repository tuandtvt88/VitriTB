import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T2.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export function Tang2Beta() {
    const wifiLocations = [
        { name: "AP-Tang-2-206-U6", top: "13%", left: "20%" },
        { name: "AP-Tang-2-208", top: "13%", left: "39%" },
        { name: "AP-Tang-2-209", top: "13%", left: "59%" },
        { name: "AP-Tang-2-212-U6", top: "13%", left: "88%" },
        { name: "AP-Tang-2-214-U6P", top: "35%", left: "75%" },
        { name: "AP-Tang-2-213-ACP", top: "38%", left: "87%" },
        { name: "AP-Tang-2-216", top: "52%", left: "82%" },
        { name: "AP-Tang-2-217", top: "67%", left: "77%" },
        { name: "AP-Tang-2-218-ACP", top: "70%", left: "88%" },
        { name: "AP-Tang-2-220-U6", top: "90%", left: "87%" },
        { name: "AP-Tang-2-222", top: "90%", left: "17%" },
        { name: "AP-Tang-2-224-U6P", top: "68%", left: "20%" },
        { name: "AP-Tang-2-201-U6P", top: "52%", left: "13%" },
        { name: "AP-Tang-2-204-U6P", top: "36%", left: "08%" },
        { name: "AP-Tang-2-203-U6P", top: "33%", left: "22%" },
        
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
