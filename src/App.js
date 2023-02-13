import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./Context/StateContext";

import {
  Resturant,
  AboutUs,
  Home,
  ContactUs,
  Discount,
  Irani,
  Cafe,
} from "./Pages/index";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="resturant/:id" element={<Resturant />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/discount-page" element={<Discount />} />
            <Route path="/irani" element={<Irani />} />
            <Route path="/cafe/:id" element={<Cafe />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
