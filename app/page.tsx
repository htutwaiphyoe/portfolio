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
    <main className="bg-gray-lightest grid gap-10 pt-40 pb-10 sm:pb-20 px-3 log:px-0 w-full md:max-w-7xl mx-auto">
      <Hero />
      <section className="grid-cols-1 grid md:grid-cols-[2fr_1.2fr] gap-5 items-start">
        <About />
        <Portfolio />
      </section>
      <section className="grid-cols-1 grid md:grid-cols-[1.2fr_2fr] gap-5 items-start">
        <Skills />
        <Milestones />
      </section>
      <Projects />
      <Footer />
    </main>
  );
}

export default HomePage;
