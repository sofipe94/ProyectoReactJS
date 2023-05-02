import LOGO from './assets/LOGO.png'
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav className="nav">
            <img src={LOGO} alt="Logo" className="logo"></img>
            <h1 className="brand">Mulita</h1>
            <div className="menu">
                <button>Botánicas</button>
                <button>Geométricas</button>
                <button>Artistas</button>
            </div>
            <CartWidget />        
        </nav>
        
    )
}

export default NavBar