import React from "react";

function Hero() {
  return (
    <section className="flex flex-col space-y-5 sm:space-y-12 items-center justify-center bg-white p-5 sm:p-10 rounded-3xl">
      <h1 className="bg-primary text-black p-5 rounded-2xl text-3xl sm:text-6xl font-semibold">
        {"Hi, I'm HWP"}
      </h1>
      <h2 className="text-2xl sm:text-5xl font-medium text-center leading-[3rem]">
        A software engineer with
      </h2>
      <p className="text-xl font-light leading-9 w-full md:max-w-7xl text-center">
        a proven track record in software engineering using cutting-edge
        technologies and consistently delivering high-quality solutions with the
        considerations of
        <span className="font-bold text-black"> User Experience</span>,
        <span className="font-bold text-black"> Performance </span>,
        <span className="font-bold text-black"> Accessibility </span>&
        <span className="font-bold text-black"> Clean code</span>. Expertise in
        working closely with stakeholders to develop business features and
        ensure the timely delivery of project milestones.
      </p>
    </section>
  );
}

export default Hero;
