import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
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

      {/* Sección Hero */}
      <main className="flex flex-col items-center text-center gap-6 mt-16 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">Transforming Industrial Vision</h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Aphelion provides cutting-edge visual solutions for the industrial sector, making complex projects clear and effective.
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions.
          <br /><br />
          Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.
        </p>
        <a href="#services" className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500">
          Explore Our Services
        </a>
      </main>

      {/* Sección de Servicios */}
      <section id="services" className="w-full max-w-6xl mt-24 text-center px-4">
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
