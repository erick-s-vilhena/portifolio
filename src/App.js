import Home from "./components/Home";
import MenuLateral from "./components/MenuLateral";
import Sobre from "./components/Sobre";


function App() {

  return (
    <div className="App row">
      <main className="col">
        <Home/>
        <Sobre/>
      </main>
      
      <MenuLateral/>
    </div>
  );
}

export default App;
