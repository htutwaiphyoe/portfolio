"use client";
import { ReactTyped } from "react-typed";

function HomePage() {
  return (
    <main className="bg-gray-lightest grid gap-20">
      <section className="pt-48 flex flex-col space-y-12 items-center justify-center">
        <h1 className="bg-primary text-black p-5 rounded-xl text-6xl font-semibold">
          {"Hi, I'm HWP"}
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
      <section className="max-w-5xl mx-auto grid grid-cols-[2fr_1.2fr] gap-10">
        <div className="bg-white grid w-full rounded-2xl p-10 gap-5 self-start">
          <h2 className="font-bold text-primary-dark text-4xl">About me</h2>
          <p>
            I am Htut Wai Phyoe, a software engineer in Myanmar. I studied
            Computer Science at Mandalay Technological University but dropped
            out at 4th year. My career began at Codigo as a full-time frontend
            developer in 2021. Additionally, I willingly contribute to the
            community by sharing my personal insights through high-quality blogs
            and podcasts.
          </p>
        </div>
        <div className="grid w-full rounded-2xl p-10 bg-primary gap-5">
          <h2 className="font-bold text-4xl">Tech stacks</h2>
          <p>
            HTML, CSS, SCSS, JavaScript, TypeScript, ReactJS, NextJS, Redux,
            React Query, Recoil, Tailwind, Material UI, React Testing Library,
            Jest, Cypress, NodeJS, ExpressJS, MongoDB, Firebase
          </p>
        </div>
      </section>
      <div></div>
    </main>
  );
}

export default HomePage;
