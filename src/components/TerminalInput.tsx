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
      <span className="text-green-500 mr-2">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={onKeyPress}
        className="flex-1 bg-transparent text-white outline-none font-mono"
        autoFocus
      />
    </div>
  );
};
