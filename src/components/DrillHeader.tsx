import { lessons } from "../lessons";
import { DrillSelect } from "./DrillSelect";

interface DrillHeaderProps {
  setIndex: (index: number) => void;
}

export const DrillHeader = (props: DrillHeaderProps) => {
  const { setIndex } = props;
  return (
    <div className="flex justify-between items-center w-full mb-6">
      <h1 className="text-4xl">JS Drills</h1>
      <DrillSelect lessons={lessons} setIndex={setIndex} />
    </div>
  );
};
