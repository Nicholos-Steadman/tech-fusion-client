import "./Header.scss"
import navLines from "../../assets/images/nav-lines.png"

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__container">
                    <img className="nav__image" src={navLines} />
                    <p className="nav__logo">
                        Bloom
                    </p>
                </div>

                <p className="nav__profile">
                    K
                </p>
            </nav>
        </header>
    )
}

export default Header;