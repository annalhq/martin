"use client";

import { Preview } from "@/components/preview";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full relative">
        <HeroGeometric
          badge="Upcoming event on 29th March"
          title1="Innovate, Code"
          title2="with GDG RBU"
        />
      </section>

      <section className="w-full relative">
        <Preview />
      </section>
    </div>
  );
}
