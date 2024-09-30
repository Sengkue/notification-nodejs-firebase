const express = require('express');
const bodyParser = require('body-parser');
const { DeviceToken } = require('./models');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to receive the device token and save it to the database
app.post('/api/device-token', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Device token is required" });
    }

    try {
        // Save token in the database
        const existingToken = await DeviceToken.findOne({ where: { token } });
        if (existingToken) {
            return res.status(400).json({ error: "Token already registered" });
        }

        const newToken = await DeviceToken.create({ token });
        res.status(200).json({ message: "Device token registered successfully", token: newToken });
    } catch (error) {
        console.error("Error saving device token:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
