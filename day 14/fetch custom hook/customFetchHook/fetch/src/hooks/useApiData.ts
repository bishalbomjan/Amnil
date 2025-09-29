import { useEffect, useState } from "react";
export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const useApiData = (endpoint: string) => {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);
  async function loadData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com" + endpoint
      );
      if (!response.ok) {
        throw new Error("Cound not fetch resource");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    }
  }
  return { data, error, loading };
};
export default useApiData;
