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
      <section
        id="services"
        className="w-full max-w-6xl mt-24 px-4 mx-auto"
      >
        {/* Ícono que reemplaza el titular "Our Services" */}
        <div className="text-center mb-8">
          <Image
            src="/our services.svg"
            alt="Our Services"
            width={150}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* Grid con 4 columnas inspiradas en la imagen adjunta */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* 1) 3D Modeling and Video Production */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3D Modeling and Video Production
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We develop high-quality 3D animations that facilitate detailed,
              precise, and dynamic visualizations of industrial processes,
              product prototypes, and structures.
            </p>
          </div>

          {/* 2) Brand Design and Digital Content */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Brand Design and Digital Content
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We create strong visual identities and strategic digital content
              that enhance your brand's presence in the market. We ensure
              consistency and professionalism at every touchpoint.
            </p>
          </div>

          {/* 3) Structural Previews and Technical Illustrations */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Structural Previews and Technical Illustrations
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We offer advanced graphical representations that allow for
              accurate anticipation of final structural and infrastructure
              designs, complemented by technical illustrations that enhance the
              understanding of complex products and processes.
            </p>
          </div>

          {/* 4) Technical Material and Internal Documentation Design */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Technical Material and Internal Documentation Design
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We produce high-quality technical and internal documentation,
              including manuals, operational guides, and training materials, all
              designed to improve efficiency and support effective knowledge
              management within your organization.
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


