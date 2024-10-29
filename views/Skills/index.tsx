import List from "@/components/List";
import { skills } from "@/constant";

function Skills() {
  return (
    <div className="grid w-full rounded-3xl p-5 sm:p-10 bg-primary gap-5 place-content-start">
      <h2 className="font-bold text-4xl">Skills</h2>
      <List
        of={skills}
        renderItem={(item) => (
          <div key={item.title}>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        )}
      />
    </div>
  );
}

export default Skills;
