import List from "@/components/List";
import { portfolio } from "@/constant";

function Portfolio() {
  return (
    <div className="grid w-full rounded-2xl p-10 bg-primary gap-5 text-black">
      <h2 className="font-bold text-4xl">Portfolio</h2>
      <List
        of={portfolio}
        renderItem={(item) => (
          <div className="flex items-center space-x-3" key={item.label}>
            <span className="text-3xl">{item.value}+</span>
            <span className="text-base">{item.label}</span>
          </div>
        )}
      />
    </div>
  );
}

export default Portfolio;
