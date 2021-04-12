# SentimentAnalysis

The purpose of this project is to create a sentiment analyser that can calculate the sentiment of a specific stock on social media, which can be potentially used to make trading decisions. The main objective of this project is to have a dashboard displaying the sentiment trend of the stocks along with the stock’s actual trading prices.


# Launching the app in development mode

## How to launch the Django API server

```bash
cd backend
python3 manage.py runserver
```

## Lauching React App

```bash
cd frontend
npm start
```

## Missing dependencies?

```bash
cd frontend
npm install
```

# Development

## Create a branch
We use a standardised format for branch creation for bugs and features. 
We use lowercase, kebab case, with a prefix for the type of work.
You don't have to remember the following, you can just check the current branches with: `git branch -r`

### Bugs
```
git checkout -b bug/bug-name-like-this
```

### Features
```
git checkout -b feature/feature-name-like-this
```

### Upgrades
```
git checkout -b upgrade/upgrade-of-technology-like-this
```

## Coding standards and style guidelines

### Merging/rebasing your local branch
Despite previous instructions, please do *NOT* do any merges or rebasing with dev. This makes it harder to see what you have added and therefore makes it more difficult to follow the logic of your changes
