import paper from "paper";
import { useEffect, useRef } from "react";

function App() {
  const mycanvas = useRef(null);

  useEffect(() => {
    paper.install(window);
    paper.setup(mycanvas.current);

    const rect = new paper.Rectangle(
      new paper.Point(50, 50),
      new paper.Point(100, 100)
    );

    const path = new paper.Path.Rectangle(rect);
    path.fillColor = new paper.Color(1, 0, 0.5);
  }, []);

  return <canvas ref={mycanvas}></canvas>;
}

export default App;
