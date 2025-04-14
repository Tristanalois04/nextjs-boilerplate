"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Deshabilitar clic derecho
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header>
        <div className="bg-black w-full py-4 border-b border-gray-800 outline outline-1 outline-white">
          <div className="w-4/5 mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/aphelion.svg"
                alt="Aphelion Logo"
                width={120}
                height={40}
              />
            </div>
            {/* Botón (imagen) */}
            <a href="#design">
              <Image
                src="/boton.svg"
                alt="Design your technology"
                width={180}
                height={48}
              />
            </a>
          </div>
        </div>
      </header>

      {/* Sección con video de fondo */}
      <section className="relative w-full h-[400px]">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
          <source src="/dron.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </section>

      {/* Sección Hero */}
      <main className="max-w-6xl mx-auto mt-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Título */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold">
              SIMPLIFY COMMUNICATE AND <span className="text-[#FF6600]">IMPRESS</span>
            </h1>
          </div>
          {/* Descripción */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify">
              <span className="text-[#FF6600]">{'<< '}</span>
              We optimize industrial companies through visual concepts and technologies that bring ideas and products to life, turning complex projects into clear, actionable solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mt-4">
              Our approach improves technical and internal communication, enhances brand presence, projects a professional image that attracts clients and investors, and increases the value of proposals.
            </p>
          </div>
        </div>
      </main>

      {/* Sección de Servicios */}
      <section id="services" className="w-full max-w-6xl mt-24 px-4 mx-auto">
        {/* Ícono "Our Services" alineado a la izquierda */}
        <div className="flex justify-start items-center mb-[4.5rem]">
          <a href="#services-grid">
            <Image
              src="/our services.svg"
              alt="Our Services"
              width={195}
              height={65}
            />
          </a>
        </div>

        {/* Grid de Servicios */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div>
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-[0.06em]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              AUTOMATED PROCESS SOLUTIONS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Smart bots that automate reporting, auditing, safety, and HR tasks by connecting to systems like SAP, Excel, and internal databases — saving time, reducing errors, and boosting efficiency.
            </p>
          </div>
          {/* Servicio 1 */}
          <div>
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-[0.06em]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              3D MODELING & VIDEO PRODUCTION
            </h3>
            <p className="text-gray-300 leading-relaxed">
              High-quality 3D animations bring industrial processes, product prototypes, and structures to life with precision and clarity.
            </p>
          </div>
          {/* Servicio 2 */}
          <div>
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-[0.06em]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              BRAND DESIGN & DIGITAL CONTENT
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A strong visual identity and strategic digital content elevate brand&#39;s presence in the market, ensuring consistency and professionalism at every interaction.
            </p>
          </div>
          {/* Servicio 3 */}
          <div>
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-[0.06em]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              STRUCTURAL PREVIEWS & TECHNICAL ILLUSTRATIONS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Advanced visual representations provide accurate structural insights, while technical illustrations simplify complex concepts for better understanding.
            </p>
          </div>
          {/* Servicio 4 */}
          <div>
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-[0.06em]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              TECHNICAL MATERIAL & DOCUMENTATION
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Clear, well-structured manuals, operational guides, and training materials optimize efficiency and knowledge retention.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 w-full">
        <div className="max-w-6xl mx-auto flex justify-between px-4 text-white" style={{ fontFamily: "Helvetica, sans-serif" }}>
          <div>
            © {new Date().getFullYear()} Aphelion.
          </div>
          <div>
            <a href="mailto:team@aphelion.com.mx" className="underline">
              team@aphelion.com.mx
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
