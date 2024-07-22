import { DrillHeader } from "../components/DrillHeader";
import { DrillPrompt } from "../components/DrillPrompt";
import { DrillEditor } from "../components/DrillEditor";
import { DrillOutput } from "../components/DrillOutput";
import { useState } from "react";

export const DrillScreen = () => {
  const [code, setCode] = useState(`
      function updateColor() {
        const h2 = document.getElementById("something")

        // your code goes here!
        // your job is to make the text color red
        // and the text say "bingus bongus"
      }

      updateColor();
    
    `);

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
        <DrillEditor initialJS={code} setJS={setCode} />
      </div>
      <div className="flex flex-col w-3/6">
        <DrillOutput
          html={`<h1 id="something">Something</h1>`}
          css={`
            #something {
              color: white;
            }
          `}
          js={code}
        />
      </div>
    </div>
  );
};
