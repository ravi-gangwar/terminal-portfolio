import { PortfolioData } from '@/types/terminal';

export const PORTFOLIO_DATA: PortfolioData = {
  about: `My name is Ravi Gangwar, a 2nd-year B.Tech student passionate about software engineering, currently interning as a Software Engineer at Wyvate.

I work on both frontend (React, React Native, Tailwind CSS) and backend (Node.js, PostgreSQL, Express).

I build full-stack applications and love contributing to startups.`,

  skills: `Web Development:
  • React.js, Next.js, Tailwind CSS, HTML, CSS, JavaScript

Mobile Development:
  • React Native

Backend Development:
  • Node.js, Express.js

Database:
  • PostgreSQL, MongoDB

Tools & Technologies:
  • Git, GitHub, Redux Toolkit, Postman, Figma`,

  projects: `1. Wyvate Customer (Web & Mobile)
   Description: Services booking platform (food, gym, salon, etc)
   Stack: Next.js, Redux, React Native
   Status: Active Development

2. StackIt
   Description: A StackOverflow clone built for Oddo Hackathon
   Stack: Next.js, Redux, PostgreSQL
   Live: https://stackit.ravigangwar.cv

3. Portfolio Site
   Description: Responsive personal site built with Next.js and Tailwind CSS
   Stack: Next.js, Tailwind CSS
   Status: Completed`,

  experience: `Software Engineer Intern, Wyvate
Duration: May 2024 – Present

Key Achievements:
• Built Wyvate Customer App (iOS/Android)
• Optimized backend APIs
• Reduced PostgreSQL latency by ~20%
• Collaborated with cross-functional teams
• Implemented new features and bug fixes`,

  contact: `Email: ravigangwar.ece@gmail.com
LinkedIn: https://linkedin.com/in/ravi-gangwar-dev/
GitHub: https://github.com/ravigangwar

Feel free to reach out for collaborations, opportunities, or just to say hello!`,

  help: `Available Commands:
• help     - Show all available commands
• about    - Show bio and background
• skills   - Show technical skills
• projects - Show portfolio projects
• experience - Show work experience
• contact  - Show contact information
• clear    - Clear the terminal
• history  - Show command history

Navigation:
• Type 'clear' to reset the terminal`
};

export const WELCOME_MESSAGE = `Welcome to Ravi Gangwar's Terminal Portfolio v1.0.0

Type 'help' to see available commands.
Type 'about' to learn more about me.

$ `; 