import React from "react";

interface TerminalOutputProps {
  output: string[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ output }) => {
  return (
    <>
      {output.map((line, index) => (
        <div key={index} className="mb-2 whitespace-pre-wrap">
          {line}
        </div>
      ))}
    </>
  );
};
