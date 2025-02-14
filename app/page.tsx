import Image from "next/image";

export default function Home() {
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
            <h1 className="text-6xl sm:text-7xl font-bold">
              SIMPLIFY, COMMUNICATE, AND <span className="text-[#FF6600]">IMPRESS</span>
            </h1>
          </div>

          {/* Columna derecha: texto descriptivo */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-4">
              Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.
            </p>
          </div>
        </div>
      </main>

      {/* Sección de Servicios */}
      <section id="services" className="w-full max-w-6xl mt-24 text-center px-4 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">3D Visualization</h3>
            <p className="text-gray-300 mt-2">
              High-quality industrial 3D videos and models.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Digital Prototyping</h3>
            <p className="text-gray-300 mt-2">
              Streamline development with digital simulations.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Process Optimization</h3>
            <p className="text-gray-300 mt-2">
              Enhance efficiency with data-driven insights.
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

