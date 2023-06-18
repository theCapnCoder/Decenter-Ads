import Main from "./Blocks/Main";
import Experience from "./Blocks/Experience";
import Cards from "./Blocks/Cards";
import Explore from "./Blocks/Explore";
import Advertising from "./Blocks/Advertising";
import Meet from "./Blocks/Meet";
import Map from "./Blocks/Map";
import Footer from "./Blocks/Footer";

function App() {
  return (
    <div style={{maxWidth: "1366px", margin: "0 auto"}}>
      <Main />
      <Experience />
      <Cards />
      <Explore />
      <Advertising />
      <Meet />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
