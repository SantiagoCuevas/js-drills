interface DrillPromptProps {
  title: string;
  prompt: string;
}

export const DrillPrompt = (props: DrillPromptProps) => {
  const { title, prompt } = props;
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <p>{prompt}</p>
    </div>
  );
};
