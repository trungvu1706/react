import React from "react";
import "./App.css";

import AwsomeImage from "./components/AwsomeImage";
import WithHoverOpacity from "./components/WithHoverOpacity";
import HoverOpacity from "./components/HoverOpacity";

const HoverOpacityImage = WithHoverOpacity(AwsomeImage, 0);
const HoverOpacityImage2 = WithHoverOpacity(HoverOpacity);

function App() {
  return (
    <div className="App">
      <HoverOpacityImage src="https://picsum.photos/id/237/200/300" />
      <HoverOpacityImage2 src="https://picsum.photos/seed/picsum/200/300" />
    </div>
  );
}

export default App;
