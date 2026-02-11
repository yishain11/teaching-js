import { useNavigate } from "react-router";
export default function TestPage() {
  const navFN = useNavigate();

  return (
    <>
      <h1>Test page</h1>
      <button
        onClick={() => {
          navFN("/", { replace: true });
        }}
      >
        go to data
      </button>
      <section>
        <h2>question:</h2>
        <form>
          <label htmlFor="answer">answer</label>
          <input type="text" name="answer" id="answer" />
        </form>
      </section>
    </>
  );
}
