import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const useApiData = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/todos")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return { data, error };
};
export default useApiData;
