import { DrillHeader } from "../components/DrillHeader";

export const DrillScreen = () => {
  return (
    <div className="flex w-lvw h-lvh p-4">
      <div className="flex flex-col w-3/6">
        <DrillHeader />
      </div>
      <div className="flex flex-col w-3/6"></div>
    </div>
  );
};
