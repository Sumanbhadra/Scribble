import React, { useRef, useState } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [eraserMode, setEraserMode] = useState(false);
  const [penColor, setPenColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);

// Drawing functions through mouse events

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
    canvas.style.cursor = "pointer";
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    if (eraserMode) {
      context.globalCompositeOperation = "destination-out";
      context.lineWidth = 20;
    } else {
      context.globalCompositeOperation = "source-over";
      context.lineWidth = lineWidth;
    }
    context.strokeStyle = penColor;
    context.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    context.closePath();
  };

  // Clear the canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  
  return (
    <div className="text-center ">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border-2 border-gray-400"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      ></canvas>
      {/* Buttons for pen, eraser, clear, color and size */}
      <div className="mt-4 flex justify-center gap-2  p-2">
        <button
          className="bg-slate-500 px-5 rounded-sm"
          onClick={() => setEraserMode(false)}
        >
          Pen
        </button>
        <button
          className="bg-slate-500 px-5 rounded-sm"
          onClick={() => setEraserMode(true)}
        >
          Eraser
        </button>
        <button
          className="bg-slate-500 px-5 rounded-sm"
          onClick={() => clearCanvas()}
        >
          Clear
        </button>
        <button
          className="bg-red-600  rounded-sm"
          onClick={() => setPenColor("red")}
        >
          <font className="text-red-600">aaa</font>
        </button>
        <button
          className="bg-lime-500  rounded-sm"
          onClick={() => setPenColor("green")}
        >
          <font className="text-lime-500">aaa</font>
        </button>
        <button
          className="bg-blue-600  rounded-sm"
          onClick={() => setPenColor("blue")}
        >
          <font className="text-blue-600">aaa</font>
        </button>
        <button
          className="bg-black  rounded-sm"
          onClick={() => setPenColor("black")}
        >
          <font className="text-black">aaa</font>
        </button>
        <button
          className="bg-yellow-500  rounded-sm"
          onClick={() => setPenColor("yellow")}
        >
          <font className="text-yellow-500">aaa</font>
        </button>
      </div>
      {/* Range input for pen size */}
      <div className="mt-1 flex justify-center gap-2  p-2">
        <label>Pen Size</label>
        <input
          type="range"
          min="1"
          max="50"
          value={lineWidth}
          onChange={(e) => setLineWidth(e.target.value)}  ></input>
          <div className="text-black">{lineWidth}</div>
      </div>
      
    </div>
  );
};

export default DrawingCanvas;
