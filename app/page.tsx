"use client";
import Hero from "@/views/Hero";
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Skills from "@/views/Skills";
import Milestones from "@/views/Milestones";
import Projects from "@/views/Projects";
import Footer from "@/views/Footer";

function HomePage() {
  return (
    <main className="bg-gray-lightest grid gap-20 pt-48 pb-20 px-10 w-full">
      <Hero />
      <section className="grid-cols-1 w-full md:max-w-5xl mx-auto grid md:grid-cols-[2fr_1.2fr] gap-10 items-start">
        <About />
        <Portfolio />
      </section>
      <section className="grid-cols-1 w-full md:max-w-5xl mx-auto grid md:grid-cols-[1.2fr_2fr] gap-10 items-start">
        <Skills />
        <Milestones />
      </section>
      <Projects />
      <Footer />
    </main>
  );
}

export default HomePage;
