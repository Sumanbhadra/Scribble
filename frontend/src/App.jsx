import { useState } from "react";
import DrawingCanvas from "./components/Canvas";

function App() {
  return (
      <div class="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 m-0 p-0">
        <h1 className="text-3xl font-bold text-center text-white py-10 ">Scribble</h1>
        <div className="flex justify-center">
          <div className="bg-white">
          <DrawingCanvas />
      
          </div>
          <div className="flex justify-center gap-2  p-2">hiijfjskaldfjla</div>
        </div>
      </div>

  );
}

export default App;
