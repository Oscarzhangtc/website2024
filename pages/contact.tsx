import React from "react";

import InfiniteCanvas from "../components/infiniteCanvas/infiniteCanvas";
import TutorialContent from "../components/tutorialContent";

// import Dock from '../components/dock';

export const title = "Contact Me";

export default function Tutorial() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(
    "cursorTutorialCursorChatRoom",
    TutorialContent
  );
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1} />
    </div>
  );
}
