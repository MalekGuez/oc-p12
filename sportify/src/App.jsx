import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>  
      <Header /> 
      <Routes>
        <Route path="/" element={<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
