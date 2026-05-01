# Scenario Data Spec

## Purpose
The app should not depend on a live ChatGPT API during the capstone demo. Instead, scenario content should be generated during development and stored in a JSON file. This makes the app faster, safer, and easier to explain in viva.

## Suggested File

```text
src/data/scenarios.json
```

## JSON Shape

```json
[
  {
    "id": "dhoni-singer",
    "hero": "MS Dhoni",
    "role": "Singer",
    "question": "What if Dhoni was a singer?",
    "shortTitle": "Captain Cool Records",
    "story": "Dhoni became the calmest singer in India. He finished every concert with a helicopter note and never missed the final chorus.",
    "achievements": [
      "Released 7 hit tracks",
      "Won Best Finisher Singer Award",
      "Created the famous Helicopter Note"
    ],
    "memeKeyword": "music",
    "audioSuggestion": {
      "title": "Bole Jo Koyal",
      "reason": "This fits Dhoni because fans already connect him with this song."
    },
    "tags": ["cricket", "music", "funny"]
  }
]
```

## Fields Explained
- `id`: unique lowercase id for the scenario.
- `hero`: person or character name.
- `role`: alternate role or profession.
- `question`: full what-if question shown to the user.
- `shortTitle`: result card title.
- `story`: funny generated output.
- `achievements`: fake records or funny achievements.
- `memeKeyword`: keyword used to select meme image.
- `audioSuggestion`: song or sound suggestion for extra entertainment.
- `tags`: categories for filtering.

## Minimum Data Required
Prepare at least 20 combinations.

Recommended heroes:
- MS Dhoni
- Virat Kohli
- Rohit Sharma
- Donald Trump
- Elon Musk
- Shah Rukh Khan
- Cristiano Ronaldo
- MrBeast
- Narendra Modi
- Taylor Swift

Recommended roles:
- Singer
- Cricketer
- Teacher
- Chef
- Bollywood Director
- Rapper
- Gamer
- News Anchor
- Stand-up Comedian
- Startup Founder

## Example Scenario Ideas
- What if Dhoni was a singer?
- What if Donald Trump was a cricketer?
- What if Virat Kohli was a school teacher?
- What if Rohit Sharma was a chef?
- What if Elon Musk was a Bollywood director?
- What if Shah Rukh Khan was a gamer?
- What if Cristiano Ronaldo was a rapper?
- What if MrBeast was a college professor?

## AI Prompt for Mradul
Use this prompt in ChatGPT to generate data:

```text
Create JSON data for a React app called What If Scenario Simulator.

Generate 20 funny "what if" scenarios. Each scenario should include:
- id
- hero
- role
- question
- shortTitle
- story
- achievements array with 3 items
- memeKeyword
- audioSuggestion with title and reason
- tags array

Keep it funny but not offensive. Avoid abusive, political hate, adult content, or real defamation. The tone should be meme-like and playful.

Return only valid JSON array.
```

## Safety Rules
- Keep all outputs friendly and non-offensive.
- Avoid hate speech, adult content, or insulting real people.
- Do not present fake achievements as real facts.
- Use playful wording like "in our alternate universe" or "in this funny scenario".
- Use static JSON first. Live AI API can be future scope.

## Viva Explanation
"We used AI only to help prepare sample content during development. In the React app, the actual scenario data is stored in a JSON file and displayed using JavaScript logic. This keeps the app simple, fast, and easy to explain."
