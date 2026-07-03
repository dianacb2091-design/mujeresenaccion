import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CuidadoPiel() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("videos");

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: "#fdf5f0" }}>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                <button
                    onClick={() => navigate("/modulos")}
                    className="mb-6 font-semibold"
                    style={{ color: "#d63384" }}
                >
                    ← Volver a módulos
                </button>

                <h1 className="text-4xl font-bold" style={{ color: "#d63384" }}>
                    Cuidado de la Piel
                </h1>

                <p className="mt-3" style={{ color: "#664455", fontSize: "17px", lineHeight: "1.8" }}>
                    Aprende a identificar tu tipo de piel, crear rutinas de cuidado diario y prevenir trastornos cutáneos.
                </p>

                <div className="mt-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span style={{ color: "#664455" }}>Progreso del módulo</span>
                        <span style={{ color: "#d63384" }}>0 de 4 videos</span>
                    </div>

                    <div className="w-full rounded-full h-3" style={{ backgroundColor: "#FDE6F0" }}>
                        <div
                            className="h-3 rounded-full"
                            style={{ width: "0%", backgroundColor: "#d63384" }}
                        ></div>
                    </div>
                </div>

                <div className="flex gap-8 mt-8 border-b pb-3">

                    <button
                        onClick={() => setActiveTab("videos")}
                        style={{
                            color: activeTab === "videos" ? "#d63384" : "#664455",
                            borderBottom: activeTab === "videos" ? "3px solid #d63384" : "none"
                        }}
                    >
                        Videos
                    </button>

                    <button
                        onClick={() => setActiveTab("pdf")}
                        style={{
                            color: activeTab === "pdf" ? "#d63384" : "#664455",
                            borderBottom: activeTab === "pdf" ? "3px solid #d63384" : "none"
                        }}
                    >
                        Guías PDF
                    </button>

                    <button
                        onClick={() => setActiveTab("avance")}
                        style={{
                            color: activeTab === "avance" ? "#d63384" : "#664455",
                            borderBottom: activeTab === "avance" ? "3px solid #d63384" : "none"
                        }}
                    >
                        Mi avance
                    </button>

                </div>

                {activeTab === "videos" && (

                    <div className="mt-8 space-y-4">

                        <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 style={{ color: "#d63384" }}>🧴 Video 1</h3>
                            <p style={{ color: "#664455" }}>Tipos de piel.</p>
                            <button className="mt-3 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: "#d63384" }}>
                                Ver video
                            </button>
                        </div>

                        <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 style={{ color: "#d63384" }}>🫧 Video 2</h3>
                            <p style={{ color: "#664455" }}>Limpieza facial.</p>
                            <button className="mt-3 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: "#d63384" }}>
                                Ver video
                            </button>
                        </div>

                        <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 style={{ color: "#d63384" }}>☀️ Video 3</h3>
                            <p style={{ color: "#664455" }}>Uso correcto del protector solar.</p>
                            <button className="mt-3 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: "#d63384" }}>
                                Ver video
                            </button>
                        </div>

                        <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 style={{ color: "#d63384" }}>🌿 Video 4</h3>
                            <p style={{ color: "#664455" }}>Rutina diaria de cuidado facial.</p>
                            <button className="mt-3 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: "#d63384" }}>
                                Ver video
                            </button>
                        </div>

                    </div>

                )}

                {activeTab === "pdf" && (

                    <div className="mt-8 space-y-4">

                        <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <h3 className="text-lg font-bold" style={{ color: "#d63384" }}>
                                📄 Guía de Cuidado de la Piel
                            </h3>

                            <p className="mt-2" style={{ color: "#664455" }}>
                                Aprende rutinas de limpieza, hidratación y protección de la piel.
                            </p>

                            <p className="text-sm mt-2 text-gray-500">
                                Tamaño: 2.1 MB
                            </p>

                            <a
                                href="#"
                                className="inline-block mt-4 px-5 py-2 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                style={{ backgroundColor: "#d63384" }}
                            >
                                📥 Descargar PDF
                            </a>

                        </div>

                    </div>

                )}

                {activeTab === "avance" && (

                    <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">

                        <h2 className="text-2xl font-bold text-[#D63384]">
                            Mi avance
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Videos vistos:
                        </p>

                        <p className="font-semibold">
                            0 / 4
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
        </div>
    );
}

export default CuidadoPiel;