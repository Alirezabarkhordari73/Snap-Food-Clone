import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./Context/StateContext";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
