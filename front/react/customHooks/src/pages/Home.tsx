import { useEffect, useState } from "react";

export default function Home() {
  // no custom hooks
  // load joke and show it with timestime

  const [jokeData, setJokeData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(true);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((res) => {
        res.arivalTime = Date.now();
        setJokeData(res);
      });
  }, [shouldRefresh]);

  // what if we want to reperduce? check intel page

  return (
    <>
      <h1>Home Page</h1>
      <h2>Joke:</h2>
      <p>{jokeData.setup}</p>
      <p>{jokeData.punchline}</p>
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
