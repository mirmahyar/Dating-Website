import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from "cors";

//APP Config
const app = express();
const PORT = process.env.PORT || 5000;
const connection_url = `mongodb+srv://dating:H7DIDsacWOAJ5qh9@cluster0.wwoyo.mongodb.net/datingDB?retryWrites=true&w=majority`;

//Middleware
app.use(express.json());
app.use(cors());
//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Happy Dating !!! ");
});

app.post("/cards", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
