let data = [
  { id: 1, email: "bishal@gmail.com" },
  { id: 2, email: "ram@gmail.com" },
];
function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  var tableData = document.querySelector(".data_table");

  let object = localStorage.getItem("object");
  let objectdata = JSON.parse(object);
  let elements = "";

  objectdata.map((record) => {
    elements += `<tr>
    
    <td>${record.email}</td>
    <td>
    <button class="edit" onclick={edit(${record.id})}>Edit</button>
    <button class="delete" onclick={del(${record.id})}>Delete</button>
    <td>
    </tr>`;
  });
  tableData.innerHTML = elements;
}
function add() {
  var email = document.querySelector(".email").value;

  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert(" Please enter a valid email");
    return; // stop execution if invalid
  }
  var newObj = { id: data.length + 1, email };
  data.push(newObj);
  document.querySelector(".email").value = "";
  readAll();
}
function edit(id) {
  document.querySelector(".update-form").style.display = "block";
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id;
}
function update() {
  var id = parseInt(document.querySelector(".id").value);
  var email = document.querySelector(".uemail").value;

  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, email };
  readAll();
}
function del(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll(0);
}
