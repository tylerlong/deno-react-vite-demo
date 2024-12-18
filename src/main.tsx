import { Button } from "antd";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello world!</h1>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        clicked {count} times
      </Button>
    </>
  );
};

export default App;
