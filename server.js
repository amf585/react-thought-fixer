const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const keys = require('./config/keys.js');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const thoughtPatterns = require('./api/patterns');

// Express instance
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(cors());

// Config
const db = keys.mongoURI;

// DB connection
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api', thoughtPatterns);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Port - default 5000
const port = process.env.PORT || 5000;

// Listen on port
app.listen(port, () => console.log(`Server running on port ${port}`));