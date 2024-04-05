import { Link } from "react-router-dom";
import "./Main.scss"
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Main() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__heading">
                    Begin customizing your experience!
                </h1>
                <p className="main__text">Complete your preference quiz now to tailor the app to your needs.</p>
                <Link to="/profile">
                    <button className="main__button">Start Now</button>
                </Link>
            </div>

            <div className="card-container">
                {products.slice(0, 6).map((product) => (
                    <Card key={product.id} productData={product} />
                ))}
            </div>

            <div className="tap-container">
                <p className="tap">Tap for more Items</p>
            </div>
        </main>
    )
}

export default Main;