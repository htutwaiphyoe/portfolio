import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section className="w-full md:max-w-5xl mx-auto grid grid-cols-1">
      <div className="grid w-full rounded-3xl p-4 sm:p-10 bg-white gap-5">
        <h2 className="font-bold text-4xl">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-gray-lightest p-3 sm:p-5 rounded-3xl grid gap-3">
            <div className="flex sm:items-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row flex-col  ">
              <Image
                src="/images/rezerv.png"
                alt="Rezerv Logo"
                width={75}
                height={75}
                className="object-over rounded-2xl"
              />
              <div>
                <a
                  className="text-xl font-bold hover:underline"
                  href="https://www.rezerv.co/"
                >
                  Rezerv
                </a>
                <h3 className="text-xl font-bold"></h3>
                <p className="text-base">
                  Service Business Management Software
                </p>
                <p className="text-sm text-gray-dark">
                  Company Project (Oct 2021 - Present)
                </p>
              </div>
            </div>
            <p>
              A powerful SaaS platform provides the tools and insights
              businesses need to streamline operations, drive revenue, and
              enhance the customer experience, empowering businesses to achieve
              their full potential.
            </p>
          </div>
          <div className="bg-gray-lightest p-3 sm:p-5 rounded-3xl grid gap-5">
            <div className="flex sm:items-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row flex-col  ">
              <Image
                src="/images/qr-x.png"
                alt="QR-X Logo"
                width={75}
                height={75}
                className="object-over rounded-2xl"
              />
              <div>
                <a
                  className="text-xl font-bold hover:underline"
                  href="https://qr-x.devtrice.dev/"
                >
                  QR-X
                </a>
                <p className="text-base">The Elegant QR Code Generator</p>
                <p className="text-sm text-gray-dark">
                  Open-Source Project (Dec 2023 - Present)
                </p>
              </div>
            </div>
            <p>
              QR-X is more than just a QR code generator. It’s a powerful tool
              designed to seamlessly integrate with your favourite frontend
              technologies, bringing your digital products to life with stunning
              QR codes!
            </p>
          </div>
          <div className="bg-gray-lightest p-3 sm:p-5 rounded-3xl grid gap-5">
            <div className="flex sm:items-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row flex-col  ">
              <Image
                src="/images/hotel-valhalla.png"
                alt="Hotel Valhalla Logo"
                width={75}
                height={75}
                className="object-over rounded-2xl"
              />
              <div>
                <a
                  className="text-xl font-bold hover:underline"
                  href="https://hotel-valhalla.vercel.app/"
                >
                  Hotel Valhalla
                </a>
                <p className="text-base">Hotel Management System</p>
                <p className="text-sm text-gray-dark">
                  Academic Project (Jan 2023 - Dec 2023)
                </p>
              </div>
            </div>
            <p>
              This is final year project of University of Greenwich which is a
              fully-fledged hotel management system designed to modernize
              traditional manual operations and enhance customer experiences to
              the next level.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 p-3 sm:p-10 rounded-2xl bg-black text-white">
          <div className="grid gap-5">
            <Image
              src="/images/rezeve.png"
              alt="Rezeve"
              width={1000}
              height={500}
              className="object-over rounded-2xl w-full h-full"
            />
            <div>
              <div className="flex space-y-1 sm:space-x-1 lg:flex-row flex-col lg:items-end">
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
            <ul className="list-disc ml-4 grid gap-1 break-words">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 p-3  sm:p-10 rounded-2xl bg-purple-lighter text-black">
          <div className="grid gap-5">
            <Image
              src="/images/valhalla.png"
              alt="Hotel Valhalla"
              width={1000}
              height={500}
              className="object-over rounded-2xl w-full h-full"
            />
            <div>
              <div className="flex space-y-1 sm:space-x-1 lg:flex-row flex-col lg:items-end">
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
            <ul className="list-disc ml-4 grid gap-1 break-words">
              <li>working with a supervisor starting from project proposal</li>
              <li className="pr-4">
                documenting the process of the project from scratch by using the
                entire life cycle of DSDM methodology (Feasibility Study,
                Exploration, Engineering, Evaluation)
              </li>
              <li className="pr-4">
                crafting the fullstack web application for the system using
                modern technologies
              </li>
              <li className="pr-4 break-all">
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
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
