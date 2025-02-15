import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
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
      {/* Encabezado: Barra de navegación en negro con outline blanco sin texto */}
      <header>
        <div className="bg-black w-full py-4 border-b border-gray-800 outline outline-1 outline-white">
          <div className="w-4/5 mx-auto flex items-center justify-between px-4">
            {/* Logo a la izquierda */}
            <div className="flex items-center">
              <Image
                src="/aphelion.svg"
                alt="Aphelion Logo"
                width={120}
                height={40}
              />
            </div>
            {/* Botón reemplazado por imagen (boton.svg) */}
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

      {/* Sección con video de fondo sin texto superpuesto */}
      <section className="relative w-full h-[400px]">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/dron.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </section>

      {/* Sección Hero */}
      <main className="max-w-6xl mx-auto mt-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda: título */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold">
              SIMPLIFY COMMUNICATE AND <span className="text-[#FF6600]">IMPRESS</span>
            </h1>
          </div>

          {/* Columna derecha: texto descriptivo */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify">
              <span className="text-[#FF6600]">{'<< '}</span>
              We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mt-4">
              Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.
            </p>
          </div>
        </div>
      </main>

      {/* Sección de Servicios */}
      <section id="services" className="w-full max-w-6xl mt-24 px-4 mx-auto">
        {/* Contenedor del ícono de "our services" y el formulario de contacto */}
        <div className="flex justify-between items-center mb-[4.5rem]">
          {/* Ícono convertido en botón, alineado a la izquierda */}
          <div className="text-left">
            <a href="#services-grid">
              <Image
                src="/our services.svg"
                alt="Our Services"
                width={195}
                height={65}
              />
            </a>
          </div>
          {/* Formulario de contacto a la derecha */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Write your message..."
              className="bg-black text-white px-4 py-2 outline outline-white"
            />
            <button className="bg-white text-black px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>

        {/* Grid con 4 columnas */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* 1) 3D MODELING & VIDEO PRODUCTION */}
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

          {/* 2) BRAND DESIGN & DIGITAL CONTENT */}
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

          {/* 3) STRUCTURAL PREVIEWS & TECHNICAL ILLUSTRATIONS */}
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

          {/* 4) TECHNICAL MATERIAL & DOCUMENTATION */}
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
      <footer className="mt-24 py-6 text-center text-gray-500 w-full">
        © {new Date().getFullYear()} Aphelion. All rights reserved.
      </footer>
    </div>
  );
}

