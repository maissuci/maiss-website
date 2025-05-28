# MAISS Website


## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/maiss.git
cd maiss
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
maiss/
├── components/     # React components
├── public/        # Static assets
│   └── images/    # Image files
├── styles/        # Global styles
└── pages/         # Next.js pages
```

## Contributing

For whoever takes over - this is pretty simple to contribute to since most of the 
infrastructure is already in place. If you want to change the structure it's not that hard
since everything is component based in separate pages.


### General

components/ui has all of the shadcn components like button and accordian. Custom components
are also here like the image carousel.

### Events

File - Events.tsx

Go to the events array at the top of the page right below the 
Event interface. Add and remove any events necessary just by taking it straight from the 
Maiss insta.

Add the corresponding image to public/images/events

### Board

File - Board.tsx

Same deal, just swap about board member images with new board.