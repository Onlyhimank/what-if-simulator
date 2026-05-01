# Team Work Plan

## Project Name
What If Scenario Simulator

## Project Summary
This project is a React-based scenario generator where users create funny "what if" combinations. Example: "What if Dhoni was a singer?" or "What if Donald Trump was a cricketer?" The app shows a creative output, fake achievements, meme-style content, and optional audio suggestions.

The app will use React, React Router, Tailwind CSS, localStorage, and static JSON scenario data. AI can be used during development to prepare scenario content, but the actual app will use JSON data so it stays simple and easy to explain in viva.

## Final Team Division

## Zeeshan Jaish: Landing Page and UI Design
Main responsibility: design and build the first impression of the app.

Work items:
- Create the landing page layout.
- Add hero section with project title and call-to-action.
- Add sample "what if" scenario cards.
- Add explanation sections for how the app works.
- Add responsive layout using Tailwind CSS.
- Improve colors, typography, spacing, buttons, and visual style.

Viva explanation:
"I worked on the landing page and UI design. I created the first screen users see, sample scenario sections, responsive layout, and the visual styling using React components and Tailwind CSS."

Suggested commits:
- Add landing page structure
- Build hero section for scenario simulator
- Add sample scenario cards
- Style landing page with Tailwind CSS
- Improve responsive landing page layout

## Himank Sain: App Setup, Routing, and Authentication Flow
Main responsibility: create the React project structure and navigation flow.

Work items:
- Set up the React app using Vite.
- Install and configure Tailwind CSS.
- Add React Router.
- Create pages: Home, Generator, Result, Login, History, About.
- Create Navbar and Footer components.
- Add frontend login flow using localStorage.
- Redirect users to login after free scenario limit is reached.

Viva explanation:
"I worked on the main app structure, routing, and login flow. I created the page routes using React Router and handled frontend login state using localStorage."

Suggested commits:
- Set up React Vite project
- Configure Tailwind CSS
- Add React Router page structure
- Create navbar and footer components
- Add localStorage login flow

## Mradul Sharma: Scenario Data, Generator Logic, and Result Content
Main responsibility: prepare the scenario content and generator output data.

Work items:
- Prepare scenario data in JSON format.
- Add heroes/persons, roles, combinations, result stories, fake records, meme keywords, and audio suggestions.
- Create at least 20 scenario combinations.
- Add generator logic to match person + role with output.
- Add fallback output for random combinations.
- Create result card content.

Viva explanation:
"I worked on scenario data and result generation. I prepared JSON data for people, roles, funny outputs, fake achievements, meme keywords, and audio suggestions. I also helped connect this data to the generator result."

Suggested commits:
- Add scenario data JSON file
- Add sample hero and role combinations
- Add result stories and fake achievements
- Add meme keywords and audio suggestions
- Connect scenario data to generator output

## Important Git Rules
- Each member should commit from their own GitHub account.
- Do not make one large commit. Make small commits after each completed feature.
- Pull latest code before starting work.
- Commit only your own assigned files when possible.
- Write clear commit messages.

## Basic Git Commands
Clone the repo:

```bash
git clone https://github.com/Onlyhimank/what-if-simulator.git
cd what-if-simulator
```

Pull latest changes:

```bash
git pull origin main
```

Check changed files:

```bash
git status
```

Stage files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Your clear commit message"
```

Push changes:

```bash
git push origin main
```

## WhatsApp Message for Team
Use this message to explain the plan:

```text
Bro we divided the project work so everyone has clear commits and viva answers.

Zeeshan: landing page and UI design.
Himank: React setup, routing, Tailwind, login flow.
Mradul: scenario JSON data, generated outputs, meme/audio suggestions.

Please commit from your own GitHub account and make 4-5 small commits instead of one big commit. Pull latest code before starting.
```
