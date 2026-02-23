import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Card from "~/components/Card";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <section className="h-screen flex flex-col justify-center px-10 bg-white text-black ">

        {/* Large, bold headline with a focus on negative space */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
          Read <br /> Different.
        </h1>

        {/* Simple, unstyled sub-text for maximum clarity */}
        <p className="max-w-xs text-sm md:text-base leading-relaxed opacity-80 uppercase tracking-widest">
          A sanctuary for stories, rare finds, and the curious.
        </p>

      </section>

    </div>
  )
}
