const colors = [
  ["FADS Gold", "#c7a978"],
  ["Black", "#000000"],
  ["White", "#ffffff"],
  ["Rumba Red", "#ab192d"],
  ["Paso Purple", "#3d1152"],
  ["Bolero Brown", "#513629"],
  ["Lemon Meringue", "#ffd200"],
];

export default function FadsEcomPage() {
  return (
    <main className="min-h-screen bg-[#0b0f0f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 border-l-4 border-[#c7a978] pl-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c7a978]">
            FADS E-Commerce
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Style Tile
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-300">
            A visual foundation for the Fred Astaire Dance Studios e-commerce
            presentation experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-8 text-[#2d3038]">
            <h2 className="font-serif text-3xl">Primary Colors</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {colors.map(([name, hex]) => (
                <div
                  key={name}
                  className="overflow-hidden rounded-2xl border border-neutral-200"
                >
                  <div
                    className="h-28"
                    style={{ backgroundColor: hex }}
                  />
                  <div className="p-4">
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-neutral-500">{hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-[#c7a978]/40 bg-[#111414] p-8">
  <h2 className="font-heading text-3xl">Typography</h2>

  <div className="mt-8 space-y-10">

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-[#c7a978]">
        Display Heading
      </p>
      <p className="mt-3 font-heading text-6xl">
        Cinzel
      </p>
      <p className="mt-2 text-sm text-neutral-400">
        Inspired by the FADS Beaufort brand font
      </p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-[#c7a978]">
        Body & Interface
      </p>
      <p className="mt-3 font-body text-4xl font-semibold">
        Montserrat
      </p>
      <p className="mt-3 max-w-xl font-body text-neutral-300">
        Used throughout the presentation for readability, comparison tables,
        navigation, and supporting content.
      </p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-[#c7a978]">
        Accent Script
      </p>
      <p className="mt-3 font-accent text-6xl text-[#c7a978]">
        Monte Carlo
      </p>
      <p className="mt-2 text-sm text-neutral-400">
        Used sparingly for elegant callouts and branding moments.
      </p>
    </div>

  </div>
</section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:col-span-2">
            <h2 className="font-serif text-3xl">Design Direction</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-xl font-semibold text-[#c7a978]">
                  Elegant
                </p>
                <p className="mt-3 text-neutral-300">
                  Black, white, gold, generous spacing, and refined typography.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-xl font-semibold text-[#c7a978]">
                  Executive
                </p>
                <p className="mt-3 text-neutral-300">
                  Clear sections, strong hierarchy, and presentation-friendly
                  layouts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-xl font-semibold text-[#c7a978]">
                  Modern Commerce
                </p>
                <p className="mt-3 text-neutral-300">
                  SaaS-style cards, comparison blocks, roadmap sections, and
                  clean CTAs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}