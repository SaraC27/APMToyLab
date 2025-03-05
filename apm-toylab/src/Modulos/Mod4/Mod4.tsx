import React from "react";
import "./Mod4.css";

const InvestmentIndicators: React.FC = () => {
    const investment = 840000000
    const earn = 7300000000
    const tir = 9.06
    const payback = 11
    const npv = 31000000
    const time = 5
    return (
        <div className="mod4-container">
            <h1>Módulo 4: Evaluación Económica de Proyectos</h1>
            <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
                <h2 className="mod4-h2">Indicadores económicos</h2>
                <div className="investment-card">
                    <div className="indicator">
                        <span className="label">Inversión Inicial:</span>
                        <span className="value">${investment.toLocaleString()}</span>
                    </div>
                    <div className="indicator">
                        <span className="label">Ganancia:</span>
                        <span className="value">${earn.toLocaleString()}</span>
                    </div>
                    <div className="indicator">
                        <span className="label">Duración (Años):</span>
                        <span className="value">{time}</span>
                    </div>
                    <div className="indicator">
                        <span className="label">TIR:</span>
                        <span className={`value ${tir > 0 ? "positive" : "negative"}`}>
                            {tir.toFixed(2)}%
                        </span>
                    </div>
                    <div className="indicator">
                        <span className="label">Payback (Meses):</span>
                        <span className="value">{payback}</span>
                    </div>
                    <div className="indicator">
                        <span className={`label`}>VPN:</span>
                        <span className={`value ${npv > 0 ? "positive" : "negative"}`}>
                            ${npv.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
            <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
                <h2 className="mod4-h2">Más información</h2>
                <h3>Propuesta Comercial</h3>
                <button className="VSM-button" onClick={() => { window.open("PDF/Oferta.pdf", '_blank'); }}>PDF</button>
                <h3>Tablas de presupuesto, costos, compras y flujo de caja</h3>
                <button className="xlsx-button" onClick={() => { window.open("https://docs.google.com/spreadsheets/d/1NPgRN18Bm3TbEfOQUac-MvsNzNJFiVxL4c6_6rGV0-Q", '_blank'); }}>Excel</button>
            </div>
        </div>
    );
};

export default InvestmentIndicators;
