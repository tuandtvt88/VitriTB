import React from "react";
import './ThongKeWiFi.css';
import { wifiLocations as wifiTang1Beta } from "./Tang1Beta";
import { wifiLocations as wifiTang2Beta } from "./Tang2Beta";
import { wifiLocations as wifiTang3Beta } from "./Tang3Beta";
import { wifiLocations as wifiTang4Beta } from "./Tang4Beta";
import { wifiLocations as wifiTang5Beta } from "./Tang5Beta";
import { wifiLocations as wifiTang1Gamma } from "./Tang1Gamma";
import { wifiLocations as wifiTang2Gamma } from "./Tang2Gamma";
import { wifiLocations as wifiTang3Gamma } from "./Tang3Gamma";
import { wifiLocations as wifiTang4Gamma } from "./Tang4Gamma";
import { wifiLocations as wifiTang5Gamma } from "./Tang5Gamma";

// Hàm phân loại AP
const classifyAP = (wifiList) => {
    const result = { U6Pro: 0, U6LR: 0, ACPro: 0 };

    if (!Array.isArray(wifiList)) return result;

    wifiList.forEach((wifi) => {
        if (typeof wifi.name === "string") {
            // Điều kiện cho U6Pro và U6LR
            if (wifi.name.includes("U6-Pro") || wifi.name.includes("U6P")) {
                result.U6Pro += 1;
            } else if (wifi.name.includes("U6-LR") || wifi.name.includes("U6")) {
                result.U6LR += 1;
            }
            // Điều kiện cho AC-Pro và ACP
            else if (wifi.name.includes("AC-Pro") || wifi.name.includes("ACP") || wifi.name.includes("AP-BT-Thu vien-01-ACP")) {
                result.ACPro += 1;
            }
        }
    });

    return result;
};

// Dữ liệu Beta và Gamma
const dataBeta = {
    "Tầng 1 Beta": classifyAP(wifiTang1Beta),
    "Tầng 2 Beta": classifyAP(wifiTang2Beta),
    "Tầng 3 Beta": classifyAP(wifiTang3Beta),
    "Tầng 4 Beta": classifyAP(wifiTang4Beta),
    "Tầng 5 Beta": classifyAP(wifiTang5Beta),
};

const dataGamma = {
    "Tầng 1 Gamma": classifyAP(wifiTang1Gamma),
    "Tầng 2 Gamma": classifyAP(wifiTang2Gamma),
    "Tầng 3 Gamma": classifyAP(wifiTang3Gamma),
    "Tầng 4 Gamma": classifyAP(wifiTang4Gamma),
    "Tầng 5 Gamma": classifyAP(wifiTang5Gamma),
};

// Tổng số lượng từng loại AP
const totalAP = (data) => {
    return Object.values(data).reduce((acc, curr) => {
        acc.U6Pro += curr.U6Pro || 0;
        acc.U6LR += curr.U6LR || 0;
        acc.ACPro += curr.ACPro || 0;
        return acc;
    }, { U6Pro: 0, U6LR: 0, ACPro: 0 });
};

// Tổng số lượng của tất cả AP cho cả Beta và Gamma
const totalBeta = totalAP(dataBeta);
const totalGamma = totalAP(dataGamma);

// Hàm tính tổng số lượng của từng tầng
const calculateTotalPerFloor = (U6Pro, U6LR, ACPro) => U6Pro + U6LR + ACPro;

export function ThongKeWiFi() {
    return (
        <div className="thong-ke">
            <h2 className="title">Thống kê số lượng WiFi các tầng</h2>

            <div className="tables-container">
                {/* Bảng Beta */}
                <div className="table-wrapper">
                    <h3 className="building-title">Nhà Beta</h3>
                    <table className="wifi-table">
                        <thead>
                            <tr>
                                <th>Tầng</th>
                                <th>U6 Pro</th>
                                <th>U6 LR</th>
                                <th>AC-Pro</th>
                                <th>Tổng</th> {/* Cột tổng số lượng */}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(dataBeta).map(([tang, { U6Pro, U6LR, ACPro }]) => (
                                <tr key={tang}>
                                    <td>{tang}</td>
                                    <td className="count">{U6Pro}</td>
                                    <td className="count">{U6LR}</td>
                                    <td className="count">{ACPro}</td>
                                    <td className="count">{calculateTotalPerFloor(U6Pro, U6LR, ACPro)}</td> {/* Hiển thị tổng số lượng trong mỗi tầng */}
                                </tr>
                            ))}
                            {/* Hàng tổng */}
                            <tr className="total-row">
                                <td><strong>Tổng</strong></td>
                                <td className="count"><strong>{totalBeta.U6Pro}</strong></td>
                                <td className="count"><strong>{totalBeta.U6LR}</strong></td>
                                <td className="count"><strong>{totalBeta.ACPro}</strong></td>
                                <td className="count"><strong>{totalBeta.U6Pro + totalBeta.U6LR + totalBeta.ACPro}</strong></td> {/* Tổng số lượng trong cả nhà Beta */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Bảng Gamma */}
                <div className="table-wrapper">
                    <h3 className="building-title">Nhà Gamma</h3>
                    <table className="wifi-table">
                        <thead>
                            <tr>
                                <th>Tầng</th>
                                <th>U6 Pro</th>
                                <th>U6 LR</th>
                                <th>AC-Pro</th>
                                <th>Tổng</th> {/* Cột tổng số lượng */}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(dataGamma).map(([tang, { U6Pro, U6LR, ACPro }]) => (
                                <tr key={tang}>
                                    <td>{tang}</td>
                                    <td className="count">{U6Pro}</td>
                                    <td className="count">{U6LR}</td>
                                    <td className="count">{ACPro}</td>
                                    <td className="count">{calculateTotalPerFloor(U6Pro, U6LR, ACPro)}</td> {/* Hiển thị tổng số lượng trong mỗi tầng */}
                                </tr>
                            ))}
                            {/* Hàng tổng */}
                            <tr className="total-row">
                                <td><strong>Tổng</strong></td>
                                <td className="count"><strong>{totalGamma.U6Pro}</strong></td>
                                <td className="count"><strong>{totalGamma.U6LR}</strong></td>
                                <td className="count"><strong>{totalGamma.ACPro}</strong></td>
                                <td className="count"><strong>{totalGamma.U6Pro + totalGamma.U6LR + totalGamma.ACPro}</strong></td> {/* Tổng số lượng trong cả nhà Gamma */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
