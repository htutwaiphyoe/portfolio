import Image from "next/image";

function Projects() {
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-1">
      <div className="grid w-full rounded-2xl p-10 bg-black text-white gap-5">
        <h2 className="font-bold text-4xl">Projects</h2>
        <div className="grid grid-cols-2 gap-10 rounded-2xl">
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
                  className="text-xl font-bold hover:underline text-green"
                  href="https://www.rezeve.com/"
                  target="_black"
                >
                  Rezeve
                </a>
                <span className="text-gray-light text-base font-normal">
                  (2021 - Present)
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
      </div>
    </section>
  );
}

export default Projects;
