const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = [];

// Генерувати нового користувача з випадковим іменем та поштою
function generateUser() {
  const names = ["John", "Jane", "Joe", "Jack", "Jill"];
  const surnames = ["Doe", "Smith", "Johnson", "Brown", "Davis"];
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com"];
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  const email = name.toLowerCase() + "." + surname.toLowerCase() + "@" + domains[Math.floor(Math.random() * domains.length)];
  const password = uuidv4();
  const role = Math.random() < 0.5 ? "admin" : "user";
  return { name, email, password, role };
}

// Створити користувача

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = uuidv4();
  users.push(user);
  res.status(201).json(user);
});

// Отримати список користувачів


app.get("/users", (req, res) => {
  res.json(users);
});
