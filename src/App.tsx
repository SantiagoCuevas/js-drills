import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { DrillScreen } from "./screens/DrillScreen";

const extensions = [javascript()];

function App() {
  return (
    <div className="flex flex-row">
      <DrillScreen />
      {/* <div>
        <CodeMirror
          value="console.log('Hello World')"
          height="100vh"
          width="50vw"
          theme={tokyoNight}
          extensions={extensions}
        />
      </div>
      <div className="flex flex-col bg-blue-600 w-full">
        <div className="bg-red-950 h-3/6"></div>
        <div className="bg-blue-600 h-3/6"></div>
      </div> */}
    </div>
  );
}

export default App;
