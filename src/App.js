import "./App.css";
import Card from "./Components/Card";
import HeroComponent from "./Components/HeroComponent";
import Navbar from "./Components/Navbar";
import Data from "./data.js";

function App() {
  const card = Data.map((item) => {
    return (
      <Card
        key={item.id}
        item = {item}
        // {...item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <section className="cards-list">{card}</section>
    </div>
  );
}

export default App;
