import SocialLinks from '../components/SocialLinks'

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-8"
    >
      <div className="motion-safe-animate-fade-in-up flex w-full max-w-content flex-col items-center text-center">
        <h1 id="hero-heading" className="sr-only">
          Rockanmon
        </h1>

        <img
          src="/logo_rockanmon.png"
          alt="Rockanmon"
          className="w-full max-w-logo"
          width={600}
          height={120}
        />

        <figure className="relative mt-12 w-full max-w-[420px] overflow-hidden">
          <img
            src="/img_rockanmon.jpeg"
            alt="Ramón tocando la guitarra"
            className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
            width={420}
            height={504}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0a_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(10,10,10,0.9)]"
          />
        </figure>

        <p className="mt-12 max-w-content text-base leading-relaxed text-foreground sm:text-lg sm:leading-8">
          Soy Ramón. Me apasiona la tecnología, la música y los videojuegos.
          Estoy aquí para construir cosas que me emocionen y compartirlas con
          el mundo. Apenas empiezo, pero voy en serio.
        </p>

        <div className="mt-12 border-t border-border pt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
