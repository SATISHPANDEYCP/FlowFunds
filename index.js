const express = require("express");
const app = express();

// const dotenv = require('./.env');
const PORT = 3000;

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', require('./routes/auth'));
app.use('/expense', require('./routes/expense'));
app.use('/income', require('./routes/income'));
app.use('/budget', require('./routes/budget'));
app.use('/report', require('./routes/report'));
app.use('/groupExpense', require('./routes/groupExpense'));
app.use('/notification', require('./routes/notification'));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, ()=>{console.log(`Server Started At ${PORT}`)});

