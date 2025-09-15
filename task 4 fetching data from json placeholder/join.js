import fetchData from "./javascript/fetch.js";
const data = await fetchData();
console.log(data);
const completed = data.filter((d) => d.completed);
completed.forEach((todo) => {
  const markup = `<tr>
            <td>${todo.userId}</td>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
          </tr>`;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", markup);
});
console.log(completed.length);
