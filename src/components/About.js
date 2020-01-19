import React from "react";
import recognitionImg from "../images/icon-brand-recognition.svg";
import recordsImg from "../images/icon-detailed-records.svg";
import customizableImg from "../images/icon-fully-customizable.svg";

function About() {
    return(
        <section className="about" id="about">
            <h2 className="display2">Advanced Settings</h2>
            <p>Track how your links are performing across the web with advanced statistics dashboard</p>
            <ul className="about__list">
                <li className="about__item">
                    <div className="about__img">
                        <img src={recognitionImg} alt=""/>
                    </div>
                    <h3 className="display3">Brand Recognition</h3>
                    <p>Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </li>
                <li className="about__item">
                    <div className="about__img">
                        <img src={recordsImg} alt=""/>
                    </div>
                    <h3 className="display3">Brand Recognition</h3>
                    <p>Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </li>
                <li className="about__item">
                    <div className="about__img">
                        <img src={customizableImg} alt=""/>
                    </div>
                    <h3 className="display3">Brand Recognition</h3>
                    <p>Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </li>
            </ul>
        </section>
    )
}

export default About;