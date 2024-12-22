const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Check if build directory exists
const buildPath = path.join(__dirname, 'build');
if (!fs.existsSync(buildPath)) {
  console.error('Build directory does not exist:', buildPath);
  process.exit(1);
}

// Serve static files from the build directory
app.use(express.static(buildPath));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  console.log(`Serving index.html for route: ${req.url}`);
  console.log(`Index path: ${indexPath}`);
  console.log(`Index exists: ${fs.existsSync(indexPath)}`);
  
  if (!fs.existsSync(indexPath)) {
    console.error('index.html does not exist');
    return res.status(404).send('index.html not found');
  }

  res.sendFile(indexPath, err => {
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
  console.log(`Build directory: ${buildPath}`);
  console.log(`Build directory exists: ${fs.existsSync(buildPath)}`);
  if (fs.existsSync(buildPath)) {
    console.log('Build directory contents:', fs.readdirSync(buildPath));
  }
});
