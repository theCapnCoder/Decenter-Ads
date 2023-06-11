import Main from "./Blocks/Main";
import Experience from "./Blocks/Experience";
import Cards from "./Blocks/Cards";
import Explore from "./Blocks/Explore";
import Advertising from "./Blocks/Advertising";
import Meet from "./Blocks/Meet";
import Map from "./Blocks/Map";
import Footer from "./Blocks/Footer";
import Form from "./Blocks/Form";
import React from "react";

const BlockComponent = () => {
  const [isChanged, setIsChanged] = React.useState(false);
  const blockRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (blockRef.current && !blockRef.current.contains(event.target as Node)) {
        setIsChanged(true);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const blockStyles = {
    backgroundColor: isChanged ? 'blue' : 'red',
  };

  return (
    <div
      className="block"
      style={blockStyles}
      ref={blockRef}
    >
      Блок
    </div>
  );
};

function App() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <BlockComponent />
      </div>
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
