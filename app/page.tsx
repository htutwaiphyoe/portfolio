"use client";
import Hero from "@/views/Hero";
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Skills from "@/views/Skills";
import Milestones from "@/views/Milestones";
import Projects from "@/views/Projects";

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
      <Projects />
      <footer className="bg-white p-10 w-[1024px] mx-auto gap-10 grid rounded-2xl place-items-center">
        <h3 className="text-5xl text-center font-medium leading-snug">
          Want to start <br /> a project?
        </h3>
        <ul className="flex items-center space-x-20 ">
          <li>
            <p className="text-gray-dark">Contact me</p>
            <ul className="flex items-center">
              <li>htutwaiphyoe@gmail.com</li>
            </ul>
          </li>
          <li>
            <p className="text-gray-dark">Follow me</p>
            <ul className="flex items-center space-x-10">
              <li>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/htutwaiphyo/"
                  target="_black"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://github.com/htutwaiphyoe"
                  target="_black"
                >
                  Github
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p>2024&copy; - All rights reserved</p>
      </footer>
    </main>
  );
}

export default HomePage;
