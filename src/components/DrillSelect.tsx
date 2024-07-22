import { Lesson } from "../types/lesson";

interface DrillSelectProps {
  lessons: Lesson[];
  setIndex: (index: number) => void;
}

export const DrillSelect = (props: DrillSelectProps) => {
  const { lessons, setIndex } = props;
  return (
    <div className="w-64 flex items-center gap-2">
      <label htmlFor="drill-select" className="text-lg">
        Level:
      </label>
      <select
        name="drills"
        id="drill-select"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#1a1b26] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => setIndex(parseInt(e.target.value, 10))}
      >
        {lessons.map((lesson, index) => (
          <option value={index} key={lesson.title} className="text-lg">
            {lesson.title}
          </option>
        ))}
      </select>
    </div>
  );
};
