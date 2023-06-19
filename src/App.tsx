import Main from "./Blocks/Main";
import Experience from "./Blocks/Experience";
import Cards from "./Blocks/Cards";
import Explore from "./Blocks/Explore";
import Advertising from "./Blocks/Advertising";
import Meet from "./Blocks/Meet";
import Map from "./Blocks/Map";
import Footer from "./Blocks/Footer";
import Documentation from "./components/Documentation";

function App() {
  return (
    <div className="container">
      <Main />
      <Experience />
      <Cards />
      <Explore />
      <Advertising />
      <Meet />
      <Map />
      <Footer />
      <Documentation />
    </div>
  );
}

export default App;
