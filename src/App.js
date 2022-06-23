import "./styles.css";
import { useState } from "react"; //use to make state vars
//counter app
function App() {
  const [count, setCount] = useState(23);

  return (
    <>
      <h2 style={{ color: "blue" }}>{count}</h2>
      <button
        id="add"
        onClick={() => {
          setCount(count + 1);
          alert("Thanks for clicking +");
        }}
      >
        +
      </button>

      <button
        id="sub"
        onClick={() => {
          setCount(count - 1);
          alert("Thanks for clicking -");
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
