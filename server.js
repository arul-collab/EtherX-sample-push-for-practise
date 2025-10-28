// Import dependencies
const express = require('express');
const app = express();
const PORT = 5000; // You can change this to any port

// Middleware
app.use(express.json()); // Allows JSON body parsing

// Basic route
app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js + Express Server!');
});

// Sample API route
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Arul', role: 'Developer' },
    { id: 2, name: 'John', role: 'Designer' },
    { id: 3, name: 'Emma', role: 'Tester' }
  ];
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});