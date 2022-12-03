import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import CheckOut from "./routes/checkOut/CheckOut";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
