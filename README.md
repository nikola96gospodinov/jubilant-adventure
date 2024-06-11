# Nik's solution

I decided to start with the second requirement as when implemented that would have solved the first requirement.

I opted for using a one-dimensional array instead of a 2D array for tracking the game state as it felt it provided a simpler solution.

For the database I used json-server and for managing server state I used Tanstack Query.

Things I would have considered if I had more time:

- better styling
- better validation of the form field
- fetching error & loading states
- UI fetching & error states
- A local backup for the score if the network requests fail for whatever reason
- Put the database URL in an environment variable
- Ability to reset the scores

To start run both:

```
npm start
```

and

```
npm run start-json-server
```
