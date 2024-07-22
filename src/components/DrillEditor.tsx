import { javascript } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

const extensions = [javascript()];

export const DrillEditor = () => {
  const [code, setCode] = useState("console.log('Hello World')");

  return (
    <div>
      <ReactCodeMirror
        value={code}
        height="55vh"
        width="50vw"
        theme={tokyoNight}
        extensions={extensions}
        onChange={setCode}
      />
      <div className="flex w-full justify-end mt-6">
        <button
          onClick={() => eval(code)}
          className="bg-indigo-500 p-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
