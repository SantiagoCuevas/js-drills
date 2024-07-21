import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

const extensions = [javascript()];

function App() {
  return (
    <>
      <h1>JS Drills</h1>
      <CodeMirror
        value="console.log('Hello World')"
        height="200px"
        theme={tokyoNight}
        extensions={extensions}
      />
    </>
  );
}

export default App;
