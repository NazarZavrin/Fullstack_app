// 📁 ./server/server.js
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
    res.send(process.env.BACKEND_APP_TEXT);
})

app.get("/frontend-text", (req, res) => {
    res.send(process.env.REACT_APP_TEXT || "Frontend: .env doesn't work");
})

app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
})