const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`app is running at port ${PORT}`));
