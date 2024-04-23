import { useEffect, useRef, useState } from "react";

const useFetch = ({ url, headers = {}, enabled = true, useCache = true }) => {
  const control = useRef();
  const [isLoading, setIsLoading] = useState(enabled);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const getData = async () => {
    if (control.current) {
      control.current.abort();
    }
    const controller = new AbortController();
    control.current = controller;
    setIsLoading(true);

    const cachedData = localStorage.getItem(url);

    if (cachedData && useCache) {
      console.log(JSON.parse(cachedData));
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    }

    fetch(url, { signal: control.current.signal, headers: headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          `Unable to fetch page data! ${response.status} ${response.statusText}`
        );
      })
      .then((responseData) => {
        if (responseData.error) throw new Error(responseData.error);
        localStorage.setItem(url, JSON.stringify(responseData));
        if (!useCache || !data) {
          setData(responseData);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(setError);
  };

  useEffect(() => {
    if (enabled) getData();

    return () => {
      if (control.current) control.current.abort();
    };
  }, []);

  return { getData, isLoading, error, data };
};

export default useFetch;
