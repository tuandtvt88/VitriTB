import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Tang1Beta } from "./components/Tang1Beta";
import  './components/App.css';
import { Tang2Beta } from "./components/Tang2Beta";
import { Tang3Beta } from "./components/Tang3Beta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="tang1beta" element={<Tang1Beta/>}></Route>
        <Route path="tang2beta" element={<Tang2Beta/>}></Route>
        <Route path="tang3beta" element={<Tang3Beta/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
