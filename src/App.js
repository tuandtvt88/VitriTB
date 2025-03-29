import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Tang1Beta } from "./components/Tang1Beta";
import  './components/App.css';
import { Tang2Beta } from "./components/Tang2Beta";
import { Tang3Beta } from "./components/Tang3Beta";
import { Tang4Beta } from "./components/Tang4Beta";
import { Tang5Beta } from "./components/Tang5Beta";
import { Tang1Gamma } from "./components/Tang1Gamma";
import { Tang2Gamma } from "./components/Tang2Gamma";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="tang1beta" element={<Tang1Beta/>}></Route>
        <Route path="tang2beta" element={<Tang2Beta/>}></Route>
        <Route path="tang3beta" element={<Tang3Beta/>}></Route>
        <Route path="tang4beta" element={<Tang4Beta/>}></Route>
        <Route path="tang5beta" element={<Tang5Beta/>}></Route>
        <Route path="tang1gamma" element={<Tang1Gamma/>}></Route>
        <Route path="tang2gamma" element={<Tang2Gamma/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
