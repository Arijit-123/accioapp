import Typingbox from "./Component/Typingbox";
import { GlobalStyle } from "./Styles/Global";
var randomwords= require('random-words');
function App() {
const words=randomwords(100);
 console.log('nutin',words);
  return (
    <>
    <div className="canvas">
      <GlobalStyle/>
      <h1>Sarkaari Stenographer</h1>
      <Typingbox words={words}/>
      <div className="footer">
      {/* <h1>footer</h1>
      <h1>third</h1> */}
      </div>
    </div>
    </>
  );
}

export default App;
