import happyNose from "../assets/imgs/happy-no-nose.jpg";

interface DrillOutputProps {
  html: string;
  css: string;
  js: string;
}

export const DrillOutput = (props: DrillOutputProps) => {
  const { html, css, js } = props;

  const srcDoc = `
  <html>

    <body>${html}</body>
    <style>${css}</style>
    <script>
      ${js}
    </script>
   
  </html>
  `;

  return (
    <div className="flex flex-col pl-12 justify-between h-full">
      <iframe
        srcDoc={srcDoc}
        title="Drill Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className="border-solid border-amber-700 border-2 h-full"
      />
      <div className="border-solid border-pink-700 border-2 h-full w-full flex justify-center items-center">
        <img
          src={happyNose}
          style={{
            maxHeight: "90%",
            maxWidth: "80%",
          }}
        />
      </div>
    </div>
  );
};
