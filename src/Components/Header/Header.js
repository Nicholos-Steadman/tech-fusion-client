import "./Header.scss"
import navLines from "../../assets/images/nav-lines.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__container">

                    <img className="nav__image" src={navLines} />
                   
                   <Link  className="nav__link" to="/">
                    <p className="nav__logo">
                        Bloom
                    </p>
                    </Link>
                </div>

                <Link className="nav__profile-avatar" to="/profile">
                    <p className="nav__profile">
                           K
                    </p>
                </Link>
            </nav>
        </header>
    )
}

export default Header;