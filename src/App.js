import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./Context/StateContext";
import { ShopStoreProvider } from "./Context/ShopContext";
import Home from "./Pages/Home";
import Resturant from "./Pages/Resturant";

function App() {
  return (
    <div>
      <ShopStoreProvider>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<AboutUs />} /> */}
              <Route path="resturant/:id" element={<Resturant />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </ShopStoreProvider>
    </div>
  );
}

export default App;
