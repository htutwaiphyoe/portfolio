import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section className="w-full md:max-w-5xl mx-auto grid grid-cols-1">
      <div className="grid w-full rounded-2xl p-10 bg-white  gap-5">
        <h2 className="font-bold text-4xl">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-2xl bg-black text-white">
          <div className="grid gap-5">
            <Image
              src="/images/rezeve.png"
              alt="Rezeve"
              width={1000}
              height={500}
              className="object-over rounded-2xl w-full h-full"
            />
            <div>
              <div className="flex space-x-1 items-end">
                <a
                  className="text-xl font-bold underline text-green"
                  href="https://www.rezeve.com/"
                  target="_black"
                >
                  Rezeve
                </a>
                <span className="text-gray-light text-base font-normal">
                  (Oct 2021 - Present)
                </span>
              </div>
              <p>
                I was assigned to take part in the Rezeve project, a SaaS
                platform for service-based businesses.
              </p>
            </div>
          </div>
          <div>
            <p>I am responsible for</p>
            <ul className="list-disc ml-4 grid gap-1 text-gray-">
              <li>
                contributing the project from scratch with Agile Scrum
                methodology
              </li>
              <li>
                working closely with the stakeholders, product and backend teams
                in the development of the system
              </li>
              <li>
                building design system and reusable components from design to
                code for the business portal
              </li>
              <li>
                delivering and maintaining the features with the highest quality
                for the business requirements
              </li>
              <li>
                collaborating with team members to brainstorm the solutions for
                day by day challenges
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-2xl bg-purple-lighter text-black">
          <div className="grid gap-5">
            <Image
              src="/images/valhalla.png"
              alt="Hotel Valhalla"
              width={1000}
              height={500}
              className="object-over rounded-2xl w-full h-full"
            />
            <div>
              <div className="flex space-x-1 items-end">
                <a
                  className="text-xl font-bold underline text-purple"
                  href="https://hotel-valhalla.vercel.app/"
                  target="_black"
                >
                  Hotel Valhalla
                </a>
                <span className="text-gray-dark text-base font-normal">
                  (Jan 2023 - Dec 2023)
                </span>
              </div>
              <p>
                A fully-fledged hotel management system for hotel valhalla, the
                final year project of University of Greenwich
              </p>
            </div>
          </div>
          <div>
            <p>I was responsible for</p>
            <ul className="list-disc ml-4 grid gap-1 text-gray-">
              <li>working with a supervisor starting from project proposal</li>
              <li>
                documenting the process of the project from scratch by using the
                entire life cycle of DSDM methodology (Feasibility Study,
                Exploration, Engineering, Evaluation)
              </li>
              <li>
                crafting the fullstack web application for the system using
                modern technologies
              </li>
              <li>
                Project Features:{" "}
                <Link
                  href="https://youtu.be/M1RqLtKBP8U?si=LrmOQ8ziLJ-9nZxh"
                  target="_blank"
                  className="underline"
                >
                  https://youtu.be/M1RqLtKBP8U?si=LrmOQ8ziLJ-9nZxh
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
