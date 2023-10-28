import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Teccomerce</h3>
            <div>
                <button>Alarges</button>
                <button>Adaptadores</button>
                <button>Zapatillas</button>
                <button>Estabilizadores</button>
                <button>UPS</button>
            </div>
            <CartWidget className = "logo"/>
        </nav>
    )
}

export default NavBar