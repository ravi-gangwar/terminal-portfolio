import React from "react";

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] terminal-container flex items-center justify-center">
        <div className="text-white text-lg">Loading terminal...</div>
      </div>
    </div>
  );
};
