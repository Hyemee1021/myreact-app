import { useState } from "react";
import { Paragraph } from "./Paragraph";

const Display = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div>
        I am from Display component
        <br />
        {counter}
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Paragraph counter={counter} />
    </div>
  );
};

export default Display;
