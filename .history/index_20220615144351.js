import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import LoginPage from './routes/LoginPage.js';
import Form from './routes/Form.js';
import Signup from './routes/Signup.js';
import { AddCart } from './controllers/addToCart.js';

const url = "mongodb+srv://farhan:123@farhan.7ltjp.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected to Database."));

var port = process.env.PORT || 8080;
app.listen(port);
app.use(cors());


app.use(cors());

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", LoginPage);

app.use("/data", LoginPage);

app.use("/form", Form);

app.use("/customerDetail", Form);

app.use("/signup", Signup);

app.use("/buy", AddCart);

app.use("/cart", AddCart);

app.use("/update", Form)