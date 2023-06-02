import Main from "./Blocks/Main";
import Experience from "./Blocks/Experience";
import Cards from "./Blocks/Cards";
import Explore from "./Blocks/Explore";
import Advertising from "./Blocks/Advertising";
import Meet from "./Blocks/Meet";
import Map from "./Blocks/Map";
import Footer from "./Blocks/Footer";
import Form from "./Blocks/Form";
import Example from "./Example";
import { Tree } from "./Blocks/Tree/Tree";

function App() {
  return (
    <div>
      <Tree />
      <Example />
      <Form />
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
