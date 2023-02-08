import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./Context/StateContext";
import Home from "./Pages/Home";
import Resturant from "./Pages/Resturant";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<AboutUs />} /> */}
            <Route path="resturants/:id" element={<Resturant />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
