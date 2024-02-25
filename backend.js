const express = require('express');
const app = express();

// Connect to your database

app.get('/recipes', async (req, res) => {
  const recipes = await db.collection('recipes').find().toArray();
  res.json(recipes);
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
