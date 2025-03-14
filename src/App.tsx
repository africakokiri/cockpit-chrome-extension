import { useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("Hello, Chrome!");

  return (
    <div className="p-4 w-80">
      <h1 className="text-2xl font-bold">{message}</h1>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setMessage("Button clicked!")}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
