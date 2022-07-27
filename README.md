# Accessible Auckland

Accessible Auckland aims to present accessibility information about locations around Auckland, in a usable way.

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

## Notes

A few notes to keep you out of trouble:
- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`
- This repo is set up for SCSS (aka "sass" style CSS). To avoid getting into a "why is my CSS not working" trap you'll need to make your CSS changes in /client/styles/index.scss and NOT in /server/public/styles.css

## Project team

Tim Greenlade

## Comments

Feel free to reach out and get in touch if you have any questions or suggestions.

