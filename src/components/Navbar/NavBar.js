import CartWidget from "./CardWidget/CartWidget"
import logo from "./img/logo3.png"

const NavBar = () => {
    return (
        <nav>
            <section className="hero is-success carrito"/>
        <div  className="is-flex is-justify-content-center">
            <img style={{ width: 200, height: 80}} src={logo}></img> 
        </div>

 
        <div className="">
            <div className="is-flex is-justify-content-center">
            <button className="button is-black is-medium is-outlined is-rounded gap">Remeras</button>
            <button className="button is-black is-medium is-outlined is-rounded gap">Pantalones</button>
            <button className="button is-black is-medium is-outlined is-rounded gap">Buzos</button>
            <button className="button is-black is-medium is-outlined is-rounded gap">Camperas</button>

            <div>
            <CartWidget/>
            </div>
            
            </div>
          </div>


          

        </nav>
           
    

 

    )
}
export default NavBar