import { useEffect, useState } from "react";

export function newHook(url) {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        res.arivalTime = Date.now();
        return res;
      });
  }, [url]);
}

export function useFetchWithTime(url: string) {
  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        res.arivalTime = Date.now();
        setData(res);
      });
  }, [url, shouldRefresh]);
  return { data, setData, setShouldRefresh, shouldRefresh };
}
