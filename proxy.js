const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/location', async (req, res) => {
    const location = req.query.input;
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&city=${location}`);
        res.send(response.data);
    }
    catch(err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
