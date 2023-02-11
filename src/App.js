import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./Context/StateContext";
import { ShopStoreProvider } from "./Context/ShopContext";
import { Resturant, AboutUs, Home } from "./Pages/index";

function App() {
  return (
    <div>
      <ShopStoreProvider>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resturant/:id" element={<Resturant />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </ShopStoreProvider>
    </div>
  );
}

export default App;
