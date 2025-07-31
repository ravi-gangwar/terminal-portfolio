import React, { useEffect, useRef } from "react";

interface TerminalOutputProps {
  output: string[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ output }) => {
  const outputRef = useRef<HTMLDivElement>(null);

  const getOutputClassName = (line: string) => {
    // Command lines (starting with $)
    if (line.startsWith("$ ")) {
      return "text-primary font-bold";
    }

    // Error messages
    if (line.includes("Command not found") || line.includes("Error")) {
      return "command-error";
    }

    // Success messages
    if (line.includes("Welcome") || line.includes("Available Commands")) {
      return "command-success";
    }

    // Info messages (help, about, etc.)
    if (
      line.includes("help") ||
      line.includes("about") ||
      line.includes("skills") ||
      line.includes("projects") ||
      line.includes("experience") ||
      line.includes("contact")
    ) {
      return "command-info";
    }

    // History commands
    if (
      line.includes("Command History") ||
      line.includes("No commands in history")
    ) {
      return "command-history";
    }

    // Default styling
    return "text-white";
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <>
      {output.map((line, index) => (
        <div
          key={index}
          className={`mb-2 whitespace-pre-wrap ${getOutputClassName(line)}`}
          style={{
            textShadow: line.startsWith("$ ")
              ? "0 0 5px rgba(0, 209, 132, 0.3)"
              : "none",
          }}
        >
          {line}
        </div>
      ))}
    </>
  );
};
