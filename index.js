const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser= require('body-parser');
const keys = require('./config/keys'); // MUST BE FIRST

require('./models/User');
require('./models/Survey');
require('./services/passport');

// DEBUG (safe placement)
console.log("MONGO:", keys.mongoURI);
console.log("GOOGLE ID:", keys.googleClientID);
console.log("COOKIE:", keys.cookieKey);

// MongoDB connect
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// Cookie session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);

// ===== PRODUCTION STATIC FILES =====
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'client', 'build', 'index.html')
    );
});
}

require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT);