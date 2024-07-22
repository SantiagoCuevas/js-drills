import { DrillHeader } from "../components/DrillHeader";
import { DrillPrompt } from "../components/DrillPrompt";
import { DrillEditor } from "../components/DrillEditor";
import { DrillOutput } from "../components/DrillOutput";
import { useEffect, useMemo, useState } from "react";
import { lessons } from "../lessons";

export const DrillScreen = () => {
  const [index, setIndex] = useState(0);
  const lesson = useMemo(() => lessons[index], [index]);
  const [code, setCode] = useState(lesson.initialJS);

  useEffect(() => {
    setCode(lesson.initialJS);
  }, [lesson]);

  return (
    <div className="flex w-lvw h-lvh p-8">
      <div className="flex flex-col w-3/6">
        <div className="flex flex-col mb-8">
          <DrillHeader setIndex={setIndex} />
          <DrillPrompt title={lesson.title} prompt={lesson.prompt} />
        </div>
        <DrillEditor initialJS={lesson.initialJS} setJS={setCode} />
      </div>
      <div className="flex flex-col w-3/6">
        <DrillOutput html={lesson.html} css={lesson.css} js={code} />
      </div>
    </div>
  );
};
