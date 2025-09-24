import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
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
    apiClient
      .get(endpoint)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};
export default useApiData;
