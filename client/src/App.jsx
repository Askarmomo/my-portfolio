import Body from "./components/Body"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App = () => {

   useEffect(() => {
    AOS.init();

  }, []);

  return (
    <>
      <div >
        <Body  />
      </div>
    </>
  )
}

export default App
