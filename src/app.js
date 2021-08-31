const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectToDB = require('./utils/database');
const userRoute = require('./http/routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth/v1', userRoute);

connectToDB(process.env.DATABASE_URL);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`app is running at port ${PORT}`));
