# DevEvent - Developer Conference & Meetup Platform

A modern full-stack web application built with Next.js and Tailwind CSS for discovering and exploring upcoming developer conferences, hackathons, and tech meetups worldwide.

## Features

- **Event Discovery**: Browse and explore upcoming developer events with detailed information
- **Event Cards**: Beautiful event cards displaying event details, location, date, and time
- **Responsive Design**: Fully responsive UI with custom background effects and animations
- **Navigation**: Intuitive navbar and smooth navigation between pages
- **Modern Styling**: Built with Tailwind CSS and shadcn components

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (React framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anjumhere/Full-Stack-NextJs-tailwindcss-project.git
cd Full-Stack-NextJs-tailwindcss-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── EventCard.tsx        # Event card component
│   │   ├── ExploreBtn.tsx       # Explore events button
│   │   └── Navbar.tsx           # Navigation bar
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── lib/
│   └── constants.ts             # Event constants and data
├── public/
│   ├── images/                  # Event images
│   └── icons/                   # Icon assets
└── components/                  # Shared UI components
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
