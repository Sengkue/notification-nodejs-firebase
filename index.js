// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const Token = require('./models/Token');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sync the database
sequelize.sync().then(() => {
  console.log("Database synced!");
}).catch(err => {
  console.error("Unable to sync the database:", err);
});

// API endpoint to receive and store the token
app.post('/api/tokens', async (req, res) => {
  const { token } = req.body;

  try {
    const [newToken, created] = await Token.findOrCreate({
      where: { token: token },
    });

    if (created) {
      res.status(200).json({ message: 'Token saved successfully', token: newToken });
    } else {
      res.status(200).json({ message: 'Token already exists', token: newToken });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error saving token', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
