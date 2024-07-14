import Image from "next/image";
import List from "@/components/List";
import { projects } from "@/constant";

function Projects() {
  return (
    <section className="grid grid-cols-1">
      <div className="grid w-full rounded-3xl p-5 sm:p-10 bg-white gap-5">
        <h2 className="font-bold text-4xl">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <List
            of={projects}
            renderItem={(item) => (
              <div
                key={item.name}
                className="bg-gray-lightest p-3 sm:p-5 rounded-3xl grid gap-3"
              >
                <div className="flex sm:items-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row flex-col  ">
                  <Image
                    width={75}
                    height={75}
                    alt={item.name}
                    src={item.image}
                    className="object-over rounded-2xl"
                  />
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.website}
                      aria-label={item.name}
                      className="text-xl font-bold hover:underline"
                    >
                      {item.name}
                    </a>
                    <p className="text-base">{item.type}</p>
                    <p className="text-sm text-gray-dark">
                      {item.project} Project ({item.duration})
                    </p>
                  </div>
                </div>
                <p>{item.description}</p>
                <div className="flex items-center flex-wrap gap-2">
                  <List
                    of={item.technologies}
                    renderItem={(item) => (
                      <p className="bg-primary text-sm rounded-md py-1 px-2 capitalize">
                        {item}
                      </p>
                    )}
                  />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
