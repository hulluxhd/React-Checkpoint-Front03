import "./style.css"
import React from "react";
import Slider from "react-slick";
import { projects } from "../../assets/data"

function Carrossel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider-container"
    };

    return (
        <div style={{backgroundColor: "#FCD0A1"}} id="Projetos" >
            <h2 style={{ textAlign: "center", margin: "auto", backgroundColor: "#FCD0A1", padding:"10px", fontSize: "2rem" }}>Principais projetos</h2>
            <div className="carousel-container">
                <Slider {...settings}>
                    {projects.map(projeto => {
                        return (
                            <div >
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1918176.png&f=1&nofb=1" style={{ width: "100%", height: "100%", maxHeight: "50vh" }} />
                            </div>

                        )
                    })}


                </Slider>

            </div>
        </div>

    );
}

export default Carrossel;