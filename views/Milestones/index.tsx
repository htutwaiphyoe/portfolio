import List from "@/components/List";
import { milestones } from "@/constant";

function Milestones() {
  return (
    <div className="grid w-full rounded-2xl px-4 py-10 sm:p-10 bg-white gap-5">
      <h2 className="font-bold text-4xl">Milestones</h2>
      <List
        of={milestones}
        renderItem={(milestone) => (
          <div key={milestone.title}>
            <h4 className="font-bold text-xl">{milestone.title}</h4>
            <p className="italic">{milestone.description}</p>
            <a
              target="_blank"
              href={milestone.website}
              className="hover:underline"
            >
              {milestone.place}
            </a>
            <p className="text-gray-dark">{milestone.timeline}</p>
          </div>
        )}
      />
    </div>
  );
}

export default Milestones;
