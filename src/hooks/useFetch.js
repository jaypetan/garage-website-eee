import { useEffect, useState } from "react";

const useFetch = (url, deps = [], headers = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    fetch(url, { signal: controller.signal, headers: headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          `Unable to fetch page data! ${response.status} ${response.statusText}`
        );
      })
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [url, ...deps]);

  return { isLoading, error, data };
};

export default useFetch;
