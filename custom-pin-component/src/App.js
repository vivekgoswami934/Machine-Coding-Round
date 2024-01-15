import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Pin from "./components/Pin";

function App() {
  const [pinInput, setPinInput] = useState("");

  const handleSetPin = (value) => {
    setPinInput(value);
  };
  console.log(`${pinInput}`,pinInput.length)

  return (
    <div className="main">
      <h5>Pin - {pinInput}</h5>
      <Pin length={4} perInputBox={4} setPinFn={handleSetPin} />
    </div>
  );
}

export default App;
