let data = JSON.parse(localStorage.getItem("object")) || [];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  const tableData = document.querySelector(".data_table");

  let object = localStorage.getItem("object");
  let objectdata = JSON.parse(object);
  let elements = "";

  objectdata.map((record, index) => {
    elements += `<tr>
    <td>${index + 1}</td>
    <td>${record.name}</td>
    <td>${record.email}</td>
    <td>${record.phone}</td>
    <td>
    <div class='button-container'>
    <button class="btn btn-edit" onclick={edit(${record.id})}>Edit</button>
    <button class="btn btn-delete" onclick={del(${record.id})}>Delete</button>
    </div>
    </td>
    </tr>`;
  });
  tableData.innerHTML = elements;
}
// const name1 = document.getElementById("username").value;
// console.log(name1.value);
function add() {
  const email = document.querySelector(".email").value;
  const phone = document.querySelector("#phone").value;
  const name = document.getElementById("username").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert(" Please enter a valid email");
    return; // stop execution if invalid
  }
  const nameRegex = /^[A-Za-z\s]{3,50}$/;
  if (!nameRegex.test(name)) {
    alert("Name must be atleast 3 character and atmost 50 character.");
    return;
  }
  const phoneRegex = /^(98|97)\d{8}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be 10 digits and start with 97 or 98");
    return;
  }

  const preEmail = data.find((item) => item.email === email);
  if (preEmail) {
    return alert(`Email ${preEmail.email} already exist`);
  }
  const newObj = { id: data.length + 1, email, name, phone };
  data.push(newObj);
  document.querySelector(".email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#username").value = "";
  readAll();
}
function edit(id) {
  const updateButton = document.querySelector(".btn-update");
  updateButton.style.display = "block";
  const submitButton = document.querySelector(".btn-submit");
  submitButton.style.display = "none";
  const obj = data.find((rec) => rec.id === id);
  document.querySelector(".email").value = obj.email;
  document.querySelector("#username").value = obj.name;
  document.querySelector("#phone").value = obj.phone;
  document.querySelector(".id").value = obj.id;
}
function update() {
  const id = parseInt(document.querySelector(".id").value);
  const email = document.querySelector(".email").value;
  const name = document.querySelector("#username").value;
  const phone = document.querySelector("#phone").value;

  const index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, email, name, phone };
  const updateButton = document.querySelector(".btn-update");
  updateButton.style.display = "none";
  const submitButton = document.querySelector(".btn-submit");
  submitButton.style.display = "block";
  document.querySelector(".email").value = "";
  document.querySelector("#username").value = "";
  document.querySelector("#phone").value = "";
  readAll();
}
function del(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}
