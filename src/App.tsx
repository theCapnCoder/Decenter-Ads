import Main from "./Blocks/Main";
import Experience from "./Blocks/Experience";
import Cards from "./Blocks/Cards";
import Explore from "./Blocks/Explore";
import Advertising from "./Blocks/Advertising";
import Meet from "./Blocks/Meet";
import Map from "./Blocks/Map";
import Footer from "./Blocks/Footer";
import Form from "./Blocks/Form";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  return (
    <div>
      {/* <Form /> */}
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
