

const express = require('express');
const app = express();
const connectDB = require('./config/db');
const protectedRoutes = require('./routes/protectedRoute');
const userRoutes = require('./routes/userRoutes');

connectDB();
app.use(express.json());

app.use('/api/users', userRoutes);

 app.use('/api/protected', protectedRoutes);

app.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
});
