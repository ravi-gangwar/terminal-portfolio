import { useState, useEffect, useRef } from 'react';
import { TerminalState } from '@/types/terminal';
import { WELCOME_MESSAGE } from '@/constants';
import { createCommandProcessor } from '@/utils';

export const useTerminal = () => {
  const [state, setState] = useState<TerminalState>({
    input: '',
    output: [],
    isClient: false
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const processCommand = (command: string) => {
    const commandProcessor = createCommandProcessor(state.output);
    const result = commandProcessor(command);
    
    if (result === 'CLEAR_COMMAND') {
      setState(prev => ({
        ...prev,
        output: [WELCOME_MESSAGE],
        input: ''
      }));
      return;
    }
    
    if (result === '') {
      setState(prev => ({
        ...prev,
        input: ''
      }));
      return;
    }
    
    setState(prev => ({
      ...prev,
      output: [...prev.output, `$ ${command}`, result],
      input: ''
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(state.input);
    }
  };

  const handleInputChange = (value: string) => {
    setState(prev => ({
      ...prev,
      input: value
    }));
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setState(prev => ({
      ...prev,
      isClient: true,
      output: [WELCOME_MESSAGE]
    }));
  }, []);

  useEffect(() => {
    focusInput();
  }, [state.output]);

  return {
    state,
    inputRef,
    handleKeyPress,
    handleInputChange,
    focusInput
  };
}; 