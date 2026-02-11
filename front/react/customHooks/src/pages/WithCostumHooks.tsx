import { useFetchWithTime } from "../customHooks/customHooks";

export function HomeWithCustomHook() {
  const { data, setShouldRefresh, shouldRefresh } = useFetchWithTime(
    "https://official-joke-api.appspot.com/random_joke",
  );
  return (
    <>
      <h1>Home Page</h1>
      <h2>Joke:</h2>
      <p>{data.setup}</p>
      <p>{data.punchline}</p>
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

export function IntelWithCustomHook() {
  const { data, setShouldRefresh, shouldRefresh } = useFetchWithTime(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
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
