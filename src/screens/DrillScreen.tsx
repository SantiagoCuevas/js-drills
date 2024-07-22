import { DrillHeader } from "../components/DrillHeader";
import { DrillPrompt } from "../components/DrillPrompt";
import { DrillEditor } from "../components/DrillEditor";

export const DrillScreen = () => {
  return (
    <div className="flex w-lvw h-lvh p-8">
      <div className="flex flex-col w-3/6">
        <div className="flex flex-col mb-8">
          <DrillHeader />
          <DrillPrompt
            title="Array: map"
            prompt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus pulvinar elementum.
            Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Ornare arcu dui vivamus arcu felis"
          />
        </div>
        <DrillEditor />
      </div>
      <div className="flex flex-col w-3/6"></div>
    </div>
  );
};
