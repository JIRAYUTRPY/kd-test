import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navbar/nav.js";
import Intro from "./components/intro/Intro.js";
import Service from "./components/service/Service.js";
import Port from "./components/port/Port";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Intro />
        <Service />
        <Port />
        <Footer />
      </header>
    </div>
  );
}

export default App;
