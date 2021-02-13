import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Story from "./pages/Story";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plans&packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route path="/story" component={Story} />
        <Route path="/about" component={About} />
        <Route path="/productDetail" component={ProductDetail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
