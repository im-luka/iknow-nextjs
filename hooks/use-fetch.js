import { useEffect, useState } from "react";

const useFetch = (axiosClient, request) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await axiosClient.get(request.url, request.params);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    sendRequest();
  }, []);

  return { data, loading, error };
};

export default useFetch;
