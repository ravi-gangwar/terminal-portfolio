export interface PortfolioData {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
  help: string;
}

export interface TerminalState {
  input: string;
  output: string[];
  isClient: boolean;
}

export interface TerminalCommands {
  [key: string]: (command: string) => string;
}

export type CommandHandler = (command: string) => string; 