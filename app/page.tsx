"use client";

import { ReactTyped } from "react-typed";

function HomePage() {
  return (
    <main className="bg-gray-lightest">
      <section className="h-screen flex flex-col space-y-12 items-center justify-center">
        <h1 className="bg-primary text-black p-5 rounded-xl text-6xl font-semibold">
          {"Hi, I'm Htut"}
        </h1>
        <h2 className="text-5xl font-medium">
          A{" "}
          <ReactTyped
            loop
            typeSpeed={40}
            backSpeed={50}
            backDelay={800}
            strings={[
              "software engineer",
              "frontend engineer",
              "web developer",
            ]}
          />
          with
        </h2>
        <p className="text-xl font-light text-center leading-9 max-w-4xl">
          a passion for crafting digital products using cutting-edge
          technologies and delivering high quality solutions with considerations
          of
          <span className="font-bold text-primary-dark"> User Experience</span>,
          <span className="font-bold text-primary-dark"> Performance </span>&
          <span className="font-bold text-primary-dark"> Accessibility </span>
        </p>
      </section>
    </main>
  );
}

export default HomePage;
