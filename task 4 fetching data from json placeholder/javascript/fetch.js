async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Cound not fetch resource");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
export default fetchData;
