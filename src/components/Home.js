import React from "react";
import homeImg from "../images/illustration-working.svg"

function Home() {
    return (
        <section className="home" id="home">
            <img className="home__img" src={homeImg} alt="Illustration working"/>
            <div className="home__content">
                <h1 className="display1">More that just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
            </div>
        </section>
    )
}

export default Home;