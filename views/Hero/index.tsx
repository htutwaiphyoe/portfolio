import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="flex flex-col space-y-5 sm:space-y-12 items-center justify-center">
      <h1 className="bg-primary text-black p-5 rounded-2xl text-3xl sm:text-6xl font-semibold">
        {"Hi, I'm HWP"}
      </h1>
      <h2 className="text-2xl sm:text-5xl font-medium text-center leading-[3rem]">
        <ReactTyped
          loop
          typeSpeed={40}
          backSpeed={50}
          backDelay={800}
          strings={[
            "A software engineer",
            "A frontend developer",
            "A fullstack developer",
            "An open-source enthusiast",
          ]}
        />
        {"with"}
      </h2>
      <p className="text-xl font-light text-center leading-9 w-full md:max-w-7xl">
        a proven track record in software engineering using cutting-edge
        technologies and consistently delivering high-quality solutions with the
        considerations of
        <span className="font-bold text-primary-darkest"> User Experience</span>
        ,<span className="font-bold text-primary-darkest"> Performance </span>,
        <span className="font-bold text-primary-darkest"> Accessibility </span>&
        <span className="font-bold text-primary-darkest"> Clean code</span>.
        Expertise in working closely with stakeholders to develop business
        features and ensure the timely delivery of project milestones.
      </p>
    </section>
  );
}

export default Hero;
