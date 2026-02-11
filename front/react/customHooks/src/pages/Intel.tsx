import { useEffect, useState } from "react";

export default function Intel() {
  // no custom hooks
  // load data and show it with timestime
  // DRY with Home comp!

  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((res) => {
        res.arivalTime = Date.now();
        setData(res);
      });
  }, [shouldRefresh]);

  return (
    <>
      <h1>Intel Page</h1>
      <h2>data:</h2>
      <p>{JSON.stringify(data)}</p>
      <button
        onClick={() => {
          setShouldRefresh(!shouldRefresh);
        }}
      >
        refresh
      </button>
    </>
  );
}
