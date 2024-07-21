import { DrillSelect } from "./DrillSelect";

export const DrillHeader = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-4xl">JS Drills</h1>
      <DrillSelect />
    </div>
  );
};
