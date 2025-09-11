let data = JSON.parse(localStorage.getItem("object")) || [];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));

  var tableData = document.querySelector(".data_table");
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
  var email = document.querySelector(".email").value;

  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert("Please enter a valid email");
    return;
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
  //   document.querySelector(".update_form").style.display = "none";
  readAll();
}

function del(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}
