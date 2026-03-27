import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Mansara Books" },
    { name: "description", content: "Welcome to Mansara Books!" },
  ];
}

export default function Home() {
  return (
    <div>
      <section className="h-screen flex flex-col justify-center px-6 sm:px-10 bg-white text-black ">

        {/* Large, bold headline with a focus on negative space */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
          Read <br /> Different.
        </h1>

        {/* Simple, unstyled sub-text for maximum clarity */}
        <p className="max-w-xs text-[10px] sm:text-sm md:text-base leading-relaxed opacity-80 uppercase tracking-widest text-justify">
          A sanctuary for stories, rare finds, and the curious.
        </p>

      </section>

    </div>
  )
}
