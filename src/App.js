import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Product from "./pages/Product";
import Featured from "./pages/Featured";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App">
    <Home/>
    <Section/>
    <Product/>
    <Featured/>  
    <Footer/>
    </div>
  );
}

export default App;
