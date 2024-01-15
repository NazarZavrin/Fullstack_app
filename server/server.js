// 📁 ./server/server.js
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
var whitelist = [process.env.FRONT_END_URL];
let corsOptions = {
    origin: function (origin, callback) {
        // console.log(whitelist);
        // console.log(origin);
        // console.log(process.env.ALLOW_UNDEFINED_ORIGIN);
        if (whitelist.indexOf(origin) !== -1 || !process.env.FRONT_END_URL) {
            callback(null, true);
        } else if (process.env.ALLOW_UNDEFINED_ORIGIN === 'true' && !origin) { // ← set process.env.ALLOW_UNDEFINED_ORIGIN to 'false' if you want to block REST tools (such as Postman) or server-to-server requests
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}
app.use(cors());

app.get("/", (req, res) => {
    res.send(process.env.BACKEND_APP_TEXT || "Backend: .env doesn't work");
})

app.get("/frontend-text", cors(corsOptions), (req, res) => {
    res.send(process.env.REACT_APP_TEXT || "Frontend: .env doesn't work");
})

app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
})