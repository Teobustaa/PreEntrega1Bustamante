import "bulma/css/bulma.css";
import NavBar from "./components/Navbar/NavBar";    
import ItemListContainer from "./components/Navbar/ItemListContainer/ItemListContainer";
import CartWidget from "./components/Navbar/CardWidget/CartWidget";

function App(){
    return(
        <div className="App">
        <NavBar/>
        <ItemListContainer greeting ={''}/>
        </div>
    )
}


export default App;