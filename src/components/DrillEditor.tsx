import { javascript } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

const extensions = [javascript()];

interface DrillEditorProps {
  initialJS: string;
  setJS: (code: string) => void;
}

export const DrillEditor = (props: DrillEditorProps) => {
  const { initialJS, setJS } = props;
  const [localCode, setLocalCode] = useState(initialJS);

  useEffect(() => {
    setLocalCode(initialJS);
  }, [initialJS]);

  return (
    <div>
      <ReactCodeMirror
        value={localCode}
        height="55vh"
        width="50vw"
        theme={tokyoNight}
        extensions={extensions}
        onChange={setLocalCode}
      />
      <div className="flex w-full justify-end mt-6 gap-4">
        <button
          className="bg-red-500 p-2 rounded-lg w-52"
          onClick={() => {
            setLocalCode(initialJS);
            setJS(initialJS);
          }}
        >
          Reset
        </button>
        <button
          className="bg-indigo-500 p-2 rounded-lg w-52"
          onClick={() => setJS(localCode)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
