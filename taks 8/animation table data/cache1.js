let data = JSON.parse(localStorage.getItem("object")) || [];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  let tableData = document.querySelector(".data_table");
  let elements = "";

  data.forEach((record) => {
    elements += `<tr>
      <td>${record.email}</td>
      <td>
        <button class="btn btn-edit" onclick="edit(${record.id})">Edit</button>
        <button class="btn btn-delete" onclick="del(${record.id})">Delete</button>
      </td>
    </tr>`;
  });

  tableData.innerHTML = elements;
}

function add() {
  const email = document.querySelector(".email").value;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert("Please enter a valid email");
    return;
  }
  const newObj = { id: data.length + 1, email };
  data.push(newObj);

  document.querySelector(".email").value = "";
  readAll();
}
function edit(id) {
  const update = document.querySelector(".update-form");
  update.style.display = "block";
  const obj = data.find((rec) => rec.id === id);
  document.querySelector(".email").value = obj.email;
  document.querySelector(".id").value = obj.id;
}

function update() {
  var id = parseInt(document.querySelector(".id").value);
  var email = document.querySelector(".uemail").value;

  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, email };
  //   document.querySelector(".update_form").style.display = "none";
  readAll();
}

function del(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}
