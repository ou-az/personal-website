const express = require('express');
const path = require('path');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  console.log(`Serving index.html for route: ${req.url}`);
  res.sendFile(path.join(__dirname, 'build', 'index.html'), err => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error loading page');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`Current directory: ${__dirname}`);
  console.log(`Build directory exists: ${require('fs').existsSync(path.join(__dirname, 'build'))}`);
});
