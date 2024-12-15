const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
