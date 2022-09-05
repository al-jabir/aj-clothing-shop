import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";

const Shop = () => {
  return <h1>I will be developer</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
