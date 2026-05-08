# What If Scenario Simulator

What If Scenario Simulator is a React-based capstone project that lets users create funny alternate-universe scenarios. A user completes a simple line like:

```text
What if MS Dhoni would be a Singer?
```

The app then generates a multiverse-style result with a story, achievements, meme moments, and saved history.

## Live Demo

[Open the deployed app](https://onlyhimank.github.io/what-if-simulator/)

## Problem Statement

People enjoy funny "what if" content, memes, and alternate-reality ideas, but they usually see this content passively on social media. This project provides an interactive way for users to create their own scenario combinations and instantly view a fun result.

## Objective

The objective is to build a simple, interactive React application that:

- Lets users choose a person and an unexpected role
- Generates a fun multiverse output
- Displays results in a clean and modern UI
- Saves generated scenarios in browser storage
- Uses a login gate after free attempts

## Features

- Landing page with modern minimal design
- Scenario generator using selectable person and role options
- Multiverse result page with story, achievements, and meme moments
- Scenario history saved using localStorage
- Login page using localStorage session handling
- Responsive UI built with Tailwind CSS
- React Router navigation between pages
- JSON-based scenario content
- Rule-based fallback generation for missing combinations

## Pages

- `/` - Landing page
- `/generator` - Scenario generator
- `/result` - Generated multiverse result
- `/history` - Saved scenario history
- `/login` - Local login page
- `/about` - Project explanation page

## Tech Stack

- HTML
- CSS
- JavaScript
- React.js
- Vite
- React Router
- Tailwind CSS
- JSON data
- localStorage

## React Concepts Used

- Components
- JSX
- useState
- useEffect
- Form handling
- Event handling
- Conditional rendering
- List rendering with map
- Array methods like find, slice, and filter
- React Router routes and navigation
- localStorage for saving user/session/history data

## How It Works

1. User opens the generator page.
2. User selects a person and a role.
3. The app checks the JSON scenario data for an exact match.
4. If a match exists, the app displays a polished result for that combination.
5. If a match does not exist, the app creates a fallback result using JavaScript rule-based logic.
6. The generated result is saved in localStorage.
7. User can view previous generations on the History page.
8. After free attempts, user is redirected to the Login page.

## Important Note

This app does not use live AI generation, machine learning, backend authentication, or a database. The project uses predefined JSON data and simple JavaScript logic so that the implementation stays easy to understand and explain during viva.

## Team Contribution

### Himank Sain

- React Vite project setup
- Tailwind CSS setup
- React Router setup
- Basic page structure
- Navbar and footer
- localStorage login page

### Mradul Sharma

- Scenario JSON data
- Deep Quality Tester
- Hero and role combinations
- Story content
- Generator UI
- Achievements and meme lines
- Scenario tags and keywords


### Zeeshan Jaish

- Project idea refinement
- README and planning documentation
- Landing page design
- Result page UI
- History flow
- localStorage result/history handling
- Rule-based fallback scenario generation

## How To Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open in browser:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Future Scope

- Add more polished scenario data
- Add real shareable result cards
- Add image/meme API integration
- Add real audio assets
- Add backend authentication
- Add user accounts and cloud history

## Authors

- Himank Sain
- Mradul Sharma
- Zeeshan Jaish
