"use client";

import React from "react";
import { useTerminal } from "@/hooks";
import { TerminalInput, TerminalOutput, LoadingScreen } from "@/components";

const TerminalComponent: React.FC = () => {
  const { state, inputRef, handleKeyPress, handleInputChange } = useTerminal();

  if (!state.isClient) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] terminal-container">
        <div className="text-green-500 font-mono text-sm h-full overflow-y-auto p-4">
          <TerminalOutput output={state.output} />
          <TerminalInput
            input={state.input}
            onInputChange={handleInputChange}
            onKeyPress={handleKeyPress}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalComponent;
