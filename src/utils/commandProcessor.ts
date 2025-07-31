import { CommandHandler } from '@/types/terminal';
import { PORTFOLIO_DATA } from '@/constants';

export const createCommandProcessor = (output: string[]): CommandHandler => {
  return (command: string): string => {
    const trimmedCommand = command.trim().toLowerCase();
    
    switch (trimmedCommand) {
      case 'help':
        return PORTFOLIO_DATA.help;
      
      case 'about':
        return PORTFOLIO_DATA.about;
      
      case 'skills':
        return PORTFOLIO_DATA.skills;
      
      case 'projects':
        return PORTFOLIO_DATA.projects;
      
      case 'experience':
        return PORTFOLIO_DATA.experience;
      
      case 'contact':
        return PORTFOLIO_DATA.contact;
      
      case 'clear':
        return 'CLEAR_COMMAND';
      
      case 'history':
        return output.length > 0 
          ? 'Command History:\n' + output.filter((line, i) => i % 2 === 0).map((line, i) => `${i + 1}: ${line.replace('$ ', '')}`).join('\n')
          : 'No commands in history yet.';
      
      case '':
        return '';
      
      default:
        return `Command not found: ${command}\nType 'help' to see available commands.`;
    }
  };
}; 