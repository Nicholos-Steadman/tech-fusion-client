import "./Account.scss"
import avatar from "../../assets/images/avatar.png"
import { Link } from "react-router-dom";

function Account() {
    return (
        <main className="account">
            <h1 className="account__heading">Account</h1>
            <img className="account__img" src={avatar} />
            <div className="account__container">
                <h2 className="account__sub-heading">
                    Welcome back Kathy!
                </h2>
                <p className="account__text">Complete your preference quiz now to tailor the app to your needs.</p>
                <Link to="/quiz/one">
                    <button className="account__button">Begin Quiz Now</button>
                </Link>
            </div>

            <section className="logout">
                <img className="logout__avatar" src={avatar} />
                <p className="logout__text">Logout</p>
            </section>

            <section className="dashboard">
                <h3 className="dashboard__heading">Dashboard</h3>
                <p className="dashboard__text">Orders</p>
                <p className="dashboard__text">Addresses</p>
                <p className="dashboard__text">Account details</p>
                <p className="dashboard__text">Wishlist</p>
            </section>

            <footer className="dashboard__footer">
                <p>
                    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </p>
            </footer>



        </main>
    )
}

export default Account;