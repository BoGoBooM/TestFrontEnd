'use strict';

// Знайти елементи форми створення користувача

const nameInput = document.getElementById("createName");
const emailInput = document.getElementById("createEmail");
const passwordInput = document.getElementById("createPassword");
const roleInput = document.getElementById("createRole");

// Знайти таблицю користувачів

const userTable = document.getElementById("userTable");

// Додати подію click на кнопку створення користувача

const createUserBtn = document.getElementById("createUserBtn");
createUserBtn.addEventListener("click", () => {

  // Отримати значення полів введення користувача

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const role = roleInput.value;

  // Створити рядок таблиці користувачів з отриманими значеннями

  const row = userTable.insertRow(-1);
  const avatarCell = row.insertCell(0);
  const nameCell = row.insertCell(1);
  const emailCell = row.insertCell(2);
  const phoneCell = row.insertCell(3);
  const deleteCell = row.insertCell(4);
  avatarCell.innerHTML = `<img src="https://via.placeholder.com/50x50.png" alt="Avatar">`;
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  phoneCell.innerHTML = "+1234567890";
  deleteCell.innerHTML = `<button type="button" class="btn btn-danger" onclick="deleteUser(this)">Delete</button>`;

  // Очистити поля введення користувача

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  roleInput.value = "user";

  // Закрити модальне вікно

  $("#createModal").modal("hide");
});

// Функція для видалення рядка таблиці користувачів

function deleteUser(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
