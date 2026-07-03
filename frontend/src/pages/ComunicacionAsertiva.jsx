import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComunicacionAsertiva() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("videos");

    return (
        <div className="min-h-screen bg-[#fdf5f0] p-8">

            {/* Botón volver */}
            <button
                onClick={() => navigate("/modulos")}
                className="mb-6 text-[#D63384] font-semibold hover:text-pink-800"
            >
                ← Volver a módulos
            </button>

            {/* Título */}
            <h1 className="text-4xl font-bold text-[#D63384]">
                Comunicación Asertiva
            </h1>

            <p className="text-gray-600 mt-3">
                Aprende técnicas de comunicación efectiva, seguridad personal e interacción social.
            </p>

            {/* Barra de progreso */}
            <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                    <span>Progreso del módulo</span>
                    <span className="text-[#D63384]">
                        0 de 3 videos
                    </span>
                </div>

                <div className="w-full bg-pink-100 rounded-full h-3">
                    <div
                        className="bg-[#D63384] h-3 rounded-full"
                        style={{ width: "0%" }}
                    ></div>
                </div>
            </div>

            {/* Pestañas */}
            <div className="flex gap-6 mt-8 border-b pb-2">

                <button
                    onClick={() => setActiveTab("videos")}
                    className={`${activeTab === "videos"
                        ? "text-[#D63384] border-b-2 border-[#D63384] font-semibold"
                        : "text-gray-500"
                        }`}
                >
                    Videos
                </button>

                <button
                    onClick={() => setActiveTab("pdf")}
                    className={`${activeTab === "pdf"
                        ? "text-[#D63384] border-b-2 border-[#D63384] font-semibold"
                        : "text-gray-500"
                        }`}
                >
                    Guías PDF
                </button>

                <button
                    onClick={() => setActiveTab("avance")}
                    className={`${activeTab === "avance"
                        ? "text-[#D63384] border-b-2 border-[#D63384] font-semibold"
                        : "text-gray-500"
                        }`}
                >
                    Mi avance
                </button>

            </div>

            {/* VIDEOS */}
            {activeTab === "videos" && (

                <div className="mt-8 space-y-4">

                    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-lg font-semibold text-[#D63384]">
                            🗣️ Video 1
                        </h3>

                        <p className="text-gray-600 mt-2">
                            ¿Qué es la comunicación asertiva?
                        </p>

                        <button className="mt-3 bg-[#D63384] text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                            Ver video
                        </button>
                    </div>

                    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-lg font-semibold text-[#D63384]">
                            👥 Video 2
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Comunicación con adultos mayores.
                        </p>

                        <button className="mt-3 bg-[#D63384] text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                            Ver video
                        </button>
                    </div>

                    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-lg font-semibold text-[#D63384]">
                            🤝 Video 3
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Resolución de conflictos mediante el diálogo.
                        </p>

                        <button className="mt-3 bg-[#D63384] text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                            Ver video
                        </button>
                    </div>

                </div>

            )}

            {/* PDF */}
            {activeTab === "pdf" && (

                <div className="mt-8">

                    <div className="bg-white border rounded-xl p-4 shadow-sm">

                        <h3 className="text-lg font-semibold text-[#D63384]">
                            📄 Guía de Comunicación Asertiva
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Aprende estrategias para comunicarte con respeto, confianza y empatía.
                        </p>

                        <button className="mt-3 bg-[#D63384] text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                            Descargar PDF
                        </button>

                    </div>

                </div>

            )}

            {/* AVANCE */}
            {activeTab === "avance" && (

                <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">

                    <h2 className="text-2xl font-bold text-[#D63384]">
                        Mi avance
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Videos vistos:
                    </p>

                    <p className="font-semibold">
                        0 / 3
                    </p>

                    <p className="mt-4 text-gray-600">
                        Guías descargadas:
                    </p>

                    <p className="font-semibold">
                        0 / 1
                    </p>

                    <div className="mt-6">

                        <div className="flex justify-between text-sm mb-2">
                            <span>Progreso general</span>
                            <span>0%</span>
                        </div>

                        <div className="w-full bg-pink-100 rounded-full h-3">

                            <div
                                className="bg-[#D63384] h-3 rounded-full"
                                style={{ width: "0%" }}
                            ></div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default ComunicacionAsertiva;