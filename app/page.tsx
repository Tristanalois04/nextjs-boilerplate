import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Header con video de fondo */}
      <header className="relative w-full h-[400px]">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
          <source src="/dron.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="relative z-10 flex justify-between items-center p-4 max-w-6xl mx-auto">
          <Image src="/aphelion.svg" alt="Aphelion Logo" width={150} height={50} />
          <nav className="hidden sm:flex gap-6">
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sección Hero con alineación tipo la imagen */}
      <main className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda: título */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Our Mission</h2>
            <h1 className="text-4xl sm:text-6xl font-bold">
              Transforming Industrial Vision
            </h1>
          </div>

          {/* Columna derecha: texto descriptivo */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-4">
              Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal..
            </p>
            <a
              href="#services"
              className="inline-block bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 mt-6"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </main>

      {/* Sección de Servicios */}
      <section id="services" className="w-full max-w-6xl mt-24 text-center px-4 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">3D Visualization</h3>
            <p className="text-gray-300 mt-2">High-quality industrial 3D videos and models.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Digital Prototyping</h3>
            <p className="text-gray-300 mt-2">Streamline development with digital simulations.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Process Optimization</h3>
            <p className="text-gray-300 mt-2">Enhance efficiency with data-driven insights.</p>
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
