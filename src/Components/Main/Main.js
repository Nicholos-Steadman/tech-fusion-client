import { Link } from "react-router-dom";
import "./Main.scss"

function Main() {
    return(
        <main className="main">
        <div className="main__container">
            <h1 className="main__heading">
                Begin customizing your experience!
            </h1>
            <p className="main__text">Complete your preference quiz now to tailor the app to your needs.</p>
            <Link to="/profile">
            <button  className="main__button">Start Now</button>
            </Link>
        </div>
        </main>
    )
}

export default Main;