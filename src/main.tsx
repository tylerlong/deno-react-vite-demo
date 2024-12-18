import { Button } from "antd";
import { useState, useEffect } from "react";
import mde from "markplus-engine";

import "./index.scss";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const main = async () => {
      const html = await mde.render("# Hello world!");
      console.log(html);
    };
    main();
  }, []);
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
