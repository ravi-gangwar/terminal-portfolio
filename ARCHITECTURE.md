# Terminal Portfolio - Modular Architecture

This document describes the modular architecture of the Terminal Portfolio application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── index.ts           # Component exports
│   ├── Terminal.tsx       # Main terminal component
│   ├── TerminalInput.tsx  # Input component
│   ├── TerminalOutput.tsx # Output display component
│   └── LoadingScreen.tsx  # Loading state component
├── hooks/                 # Custom React hooks
│   ├── index.ts           # Hook exports
│   └── useTerminal.ts     # Terminal state management hook
├── constants/             # Application constants
│   ├── index.ts           # Constant exports
│   └── portfolio.ts       # Portfolio data and messages
├── types/                 # TypeScript type definitions
│   └── terminal.ts        # Terminal-related types
└── utils/                 # Utility functions
    ├── index.ts           # Utility exports
    └── commandProcessor.ts # Command processing logic
```

## 🏗️ Architecture Overview

### **Separation of Concerns**
- **Components**: UI components focused on rendering
- **Hooks**: Business logic and state management
- **Constants**: Static data and configuration
- **Types**: TypeScript type definitions
- **Utils**: Pure functions for data processing

### **Component Hierarchy**
```
Terminal (Main Component)
├── LoadingScreen (Conditional)
└── Terminal Container
    ├── TerminalOutput (Display)
    └── TerminalInput (Interaction)
```

## 🔧 Key Modules

### **1. Components (`/components`)**
- **Terminal.tsx**: Main container component
- **TerminalInput.tsx**: Input field with command handling
- **TerminalOutput.tsx**: Output display with scrolling
- **LoadingScreen.tsx**: Loading state component

### **2. Hooks (`/hooks`)**
- **useTerminal.ts**: Custom hook managing terminal state
  - State management (input, output, client status)
  - Command processing
  - Input focus management
  - Event handlers

### **3. Constants (`/constants`)**
- **portfolio.ts**: All portfolio data and messages
  - Portfolio content (about, skills, projects, etc.)
  - Welcome message
  - Help text

### **4. Types (`/types`)**
- **terminal.ts**: TypeScript interfaces
  - `PortfolioData`: Portfolio content structure
  - `TerminalState`: Terminal state interface
  - `TerminalCommands`: Command handlers mapping
  - `CommandHandler`: Command processing function type

### **5. Utils (`/utils`)**
- **commandProcessor.ts**: Command processing logic
  - `createCommandProcessor`: Factory function for command handlers
  - Pure functions for command validation and response generation

## 🔄 Data Flow

1. **User Input** → `TerminalInput` component
2. **Key Press** → `useTerminal` hook
3. **Command Processing** → `commandProcessor` utility
4. **State Update** → `useTerminal` hook
5. **UI Update** → `TerminalOutput` component

## 🎯 Benefits of This Architecture

### **Maintainability**
- Clear separation of concerns
- Easy to locate and modify specific functionality
- Reduced coupling between components

### **Reusability**
- Components can be reused in different contexts
- Hooks can be shared across components
- Utilities are pure functions, easily testable

### **Scalability**
- Easy to add new commands
- Simple to extend with new features
- Modular structure supports team development

### **Type Safety**
- Comprehensive TypeScript types
- Better IDE support and error catching
- Self-documenting code

## 🚀 Adding New Features

### **Adding a New Command**
1. Add command data to `constants/portfolio.ts`
2. Add command handler to `utils/commandProcessor.ts`
3. Update types if needed in `types/terminal.ts`

### **Adding a New Component**
1. Create component in `components/`
2. Add to `components/index.ts` exports
3. Import and use in main Terminal component

### **Adding New State Logic**
1. Extend `useTerminal` hook or create new hook
2. Update types in `types/terminal.ts`
3. Connect to components as needed

## 📦 Build and Deployment

The application builds successfully with:
- ✅ TypeScript compilation
- ✅ ESLint validation
- ✅ Next.js optimization
- ✅ Static generation ready

All modules are properly exported and imported, ensuring clean dependency management. 