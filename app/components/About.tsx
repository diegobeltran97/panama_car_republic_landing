export default function About() {
  return (
    <section id="about" className="bg-[#FBF6EC] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading + intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#231F20] mb-5"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            ¿Qué es Panama Car Republic?
          </h2>
          <p className="text-[#231F20]/70 text-sm sm:text-base leading-relaxed">
            Compra y vende con confianza. Panama Car Republic es el marketplace
            automotriz más completo y seguro de Panamá. Autos, piezas y
            coleccionables en un solo lugar, diseñado para los verdaderos
            amantes de los carro.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left — mascot in gray card */}
          <div className="bg-[#6C6F71] rounded-3xl p-8 flex items-center justify-center min-h-[320px]">
            <img
              src="/auto_about.png"
              alt="Mascota de Panama Car Republic conduciendo un auto con placa UX24"
              className="w-full max-w-md object-contain drop-shadow-xl"
            />
          </div>

          {/* Right — category blocks */}
          <div className="flex flex-col justify-center gap-8">
            {/* AUTOS — highlighted */}
            <div className="bg-[#5F6264] rounded-2xl p-7">
              <h3
                className="text-xl uppercase tracking-wide text-white mb-3"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Autos
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Encuentra vehículos nuevos y usados de particulares y
                concesionarios en toda Panamá. Desde sedanes hasta pickups, SUVs
                y deportivos.
              </p>
            </div>

            {/* PIEZAS */}
            <div className="px-1">
              <h3
                className="text-xl uppercase tracking-wide text-[#231F20] mb-3"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Piezas
              </h3>
              <p className="text-[#231F20]/70 text-sm leading-relaxed">
                Repuestos, accesorios y componentes para todo tipo de vehículo.
                Ya sea que estés buscando una pieza específica o equipando tu
                carro, aquí encuentras lo que necesitas sin complicaciones.
              </p>
            </div>

            {/* COLECCIONABLES */}
            <div className="px-1">
              <h3
                className="text-xl uppercase tracking-wide text-[#231F20] mb-3"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Coleccionables
              </h3>
              <p className="text-[#231F20]/70 text-sm leading-relaxed">
                Para los verdaderos entusiastas. Modelos a escala, Hot Wheels,
                miniaturas y artículos de colección del mundo automotriz. Un
                espacio dedicado a los que viven y respiran la cultura del
                carro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
