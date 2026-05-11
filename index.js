const appInsights = require('applicationinsights');

appInsights.setup('InstrumentationKey=64e9ec88-0a66-4fd0-b7e0-c8abbf370da3;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/;ApplicationId=56b5de4c-5505-4ccd-9543-a4dc4f7b4879')
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .start();

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