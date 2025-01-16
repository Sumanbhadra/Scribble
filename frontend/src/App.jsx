import { useState } from "react";
import DrawingCanvas from "./components/Canvas";
import RealTimeChat from "./components/RealTimeChat";

function App() {
  return (
      <div >
        <h1 className="text-3xl font-bold text-center text-white py-10 ">Scribble</h1>
        <div className="flex justify-center">
          <div className="bg-white">
          <DrawingCanvas />
      
          </div>
          <div className="flex justify-center gap-2  p-2">
            <RealTimeChat />
          </div>
        </div>
      </div>

  );
}

export default App;
