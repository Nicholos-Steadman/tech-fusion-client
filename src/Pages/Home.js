import Header from "../Components/Header/Header"


function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <div>
                    <h1 className="main__heading">
                        Begin customizing your experience!
                    </h1>
                    <p className="main__text">Complete your preference quiz now to tailor the app to your needs.</p>
                    <button className="main__button">Start Now</button>
                </div>
            </main>

        </>
    )
}

export default Home;