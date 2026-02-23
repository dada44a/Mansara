import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact | Read Different" },
    { name: "description", content: "About our bookstore." },
  ];
}

export default function Contact() {
  return (
    <div className="bg-white text-black">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
          We Believe <br /> Stories Matter.
        </h1>

        <p className="max-w-md text-sm md:text-base leading-relaxed opacity-80 uppercase tracking-widest">
          A quiet space for rare books, timeless voices, and curious minds.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="px-10 py-32 border-t border-black/10">
        <div className="max-w-3xl space-y-10">
          
          <h2 className="text-4xl font-semibold tracking-tight">
            Our Philosophy
          </h2>

          <p className="text-lg leading-relaxed opacity-80">
            We are not just a bookstore. We are a sanctuary for thinkers, 
            wanderers, and readers who crave something different. 
            In a world of noise, we curate silence. In a world of speed, 
            we honor slowness.
          </p>

          <p className="text-lg leading-relaxed opacity-80">
            Every book on our shelf is chosen with intention. 
            Rare finds, literary classics, modern masterpieces — 
            stories that leave a mark long after the final page.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-10 py-32 border-t border-black/10">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-semibold mb-16 tracking-tight">
            Why Read Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-sm uppercase tracking-widest">
            
            <div className="space-y-4">
              <h3 className="text-base font-semibold tracking-normal">
                Curated Selection
              </h3>
              <p className="opacity-70 normal-case tracking-normal">
                We prioritize depth over volume. Every title is chosen 
                for its voice, impact, and lasting relevance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold tracking-normal">
                Rare & Unique
              </h3>
              <p className="opacity-70 normal-case tracking-normal">
                Discover limited prints, hidden gems, and books 
                you won’t find everywhere.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold tracking-normal">
                For the Curious
              </h3>
              <p className="opacity-70 normal-case tracking-normal">
                We exist for readers who seek meaning, nuance, 
                and something beyond the mainstream.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-10 py-40 border-t border-black/10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold tracking-tight leading-tight">
            Reading is not escape. <br />
            It is expansion.
          </h2>
        </div>
      </section>

    </div>
  );
}