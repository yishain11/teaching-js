import "./App.css";
import Home from "./pages/Home";
import Intel from "./pages/Intel";
import {
  HomeWithCustomHook,
  IntelWithCustomHook,
} from "./pages/WithCostumHooks";

function App() {
  return (
    <>
      {/* <Home />
      <Intel /> */}

      <hr />
      <h1>with custom hooks</h1>
      <HomeWithCustomHook />
      <IntelWithCustomHook />
    </>
  );
}

export default App;
