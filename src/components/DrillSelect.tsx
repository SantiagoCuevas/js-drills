export const DrillSelect = () => {
  return (
    <div className="w-64 flex items-center gap-2">
      <label htmlFor="drill-select" className="text-lg">
        Level:
      </label>
      <select
        name="drills"
        id="drill-select"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#1a1b26] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value={1} className="text-lg">
          Array: map
        </option>
        <option value={2} className="text-lg">
          Array: reduce
        </option>
        <option value={3} className="text-lg">
          Array: forEach
        </option>
      </select>
    </div>
  );
};
