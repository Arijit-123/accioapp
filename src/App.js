import Typingbox from "./Component/Typingbox";
import { GlobalStyle } from "./Styles/Global";

function App() {

 
  return (
    <>
    <div className="canvas">
      <GlobalStyle/>
      <h1 style={{"text-align":"center", "color":"yellow"}}>
     
      Sarkaari Stenographer
    
      </h1>
      <h4  style={{"text-align":"center"}}>India's no1 Stenographer platform</h4>
      <Typingbox />
      <div className="footer">
      {/* <h1>footer</h1>
      <h1>third</h1> */}
      </div>
    </div>
    </>
  );
}

export default App;
