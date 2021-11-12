import logo from "./logo.svg";
import Navbar from "./component/navbar";
import CarosuleCard from "./component/carosuleCard";
import "./App.css";
import LeftNavBar from "./component/leftNavBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CarosuleCard />

      <LeftNavBar />
    </div>
  );
}

export default App;
