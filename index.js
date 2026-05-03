const express = require('express');
const app = express();

app.use(express.json());

// Endpoint simple
app.get('/', (req, res) => {
    res.send('ArtStore API is running');
});

// Endpoint productos
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Painting" },
        { id: 2, name: "Sculpture" }
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});