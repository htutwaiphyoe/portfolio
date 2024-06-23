import List from "@/components/List";
import { skills } from "@/constant";

function Skills() {
  return (
    <div className="grid w-full rounded-3xl p-5 sm:p-10 bg-primary gap-5">
      <h2 className="font-bold text-4xl">Skills</h2>
      <List
        of={skills}
        renderItem={(item) => (
          <div key={item.title}>
            <h4 className="font-bold text-xl">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        )}
      />
    </div>
  );
}

export default Skills;
