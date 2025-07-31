import React from "react";

interface TerminalInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  input,
  onInputChange,
  onKeyPress,
  inputRef,
}) => {
  return (
    <div className="flex items-center">
      <span className="terminal-prompt mr-2">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={onKeyPress}
        className="terminal-input flex-1"
        autoFocus
        style={{
          caretColor: "#00d184",
          textShadow: "0 0 3px rgba(0, 209, 132, 0.3)",
        }}
      />
    </div>
  );
};
