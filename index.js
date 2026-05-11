const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Endpoint simple
app.get('/', (req, res) => {
    res.send('ArtStore API is running - DevOps Pipeline Active');
});

// Endpoint productos
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Painting" },
        { id: 2, name: "Sculpture" }
    ]);
});

const PORT = 3000;

// Only start server if file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;