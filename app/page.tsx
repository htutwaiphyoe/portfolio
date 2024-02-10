"use client";
import Hero from "@/views/Hero";
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Skills from "@/views/Skills";
import Milestones from "@/views/Milestones";

function HomePage() {
  return (
    <main className="bg-gray-lightest grid gap-20 pt-48 pb-20 px-5">
      <Hero />
      <section className="max-w-5xl mx-auto grid grid-cols-[2fr_1.2fr] gap-10 items-start">
        <About />
        <Portfolio />
      </section>
      <section className="max-w-5xl mx-auto grid grid-cols-[1.2fr_2fr] gap-10 items-start">
        <Skills />
        <Milestones />
      </section>
    </main>
  );
}

export default HomePage;
