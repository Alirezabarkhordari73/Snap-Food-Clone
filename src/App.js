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
  Cookies,
  Breads,
  Fruits,
  IceCreams,
  Meats,
  Nuts,
  Products,
  FastFood,
  Kebab,
  Pitza,
  Berger,
  Sandwich,
  Fried,
  SignUpOwners,
  Pasta,
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
            <Route path="/fastfood" element={<FastFood />} />
            <Route path="/kabab" element={<Kebab />} />
            <Route path="/pitza" element={<Pitza />} />
            <Route path="/berger" element={<Berger />} />
            <Route path="/sandwich" element={<Sandwich />} />
            <Route path="/fried" element={<Fried />} />
            <Route path="/pasta" element={<Pasta />} />
            <Route path="/cafe/:id" element={<Cafe />} />
            <Route path="/cookies/:id" element={<Cookies />} />
            <Route path="/breads/:id" element={<Breads />} />
            <Route path="/fruits/:id" element={<Fruits />} />
            <Route path="/icecreams/:id" element={<IceCreams />} />
            <Route path="/meats/:id" element={<Meats />} />
            <Route path="/nuts/:id" element={<Nuts />} />
            <Route path="/newexperiences/:id" element={<Products />} />
            <Route path="/toprated/:id" element={<Products />} />
            <Route path="/withdiscount/:id" element={<Products />} />
            <Route path="/iscoupons/:id" element={<Products />} />
            <Route path="/SignUp-Owners" element={<SignUpOwners />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
