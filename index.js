const port = process.env.PORT || 8080;
import express from "express";
const app = express();
import cors from "cors";


/* CORS */
//, process.env.REACT_APP_LOCAL
//`${process.env.REACT_APP_DEPLOY}`, `${process.env.REACT_APP_LOCAL}`
const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS ey'));
        }
    },
};

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors(corsOptions));


app.get("/api", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ "ettTest": `hej` })
})