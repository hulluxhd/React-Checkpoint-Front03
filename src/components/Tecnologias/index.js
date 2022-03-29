import "./style.css"
import { SiJavascript, SiSpringboot } from "react-icons/si"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
//import {SiJavascript} from "react-icons/si"
import { DiCss3 } from "react-icons/di"
import { FaReact, FaJava, FaDocker } from "react-icons/fa"



function Tecnologias() {
    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "2rem", margin: "70px auto" }}>Tecnologias</h2>
            <div className="tecnologias-container">
                <div className="tecnologias-especialidade">
                    <h3 style={{ textAlign: "center", fontSize: "1.5rem", justifySelf:"flex-start" }}>Front</h3>
                    <div className="tecnologias-tecs">
                        <p className="tecnologias-paragrafo"><SiJavascript style={{ color: "#f0db4f " }} /> <span className="tecnologias-p-span" style={{ fontSize: "1.2rem" }}>JavaScript</span></p>
                        <p className="tecnologias-paragrafo"><AiFillHtml5 style={{ color: "#e34c26  " }} />  <span className="tecnologias-p-span">  HTML</span></p>
                        <p className="tecnologias-paragrafo"><DiCss3 style={{ color: "#263238  " }} />  <span className="tecnologias-p-span">  CSS</span></p>
                        <p className="tecnologias-paragrafo"><FaReact style={{ color: "#05427c  " }} />  <span className="tecnologias-p-span">  React</span></p>
                    </div>
                </div>
                <div className="tecnologias-especialidade">
                    <h3 style={{ textAlign: "center", fontSize: "1.5rem", justifySelf:"flex-start"  }}>Back</h3>
                    <div className="tecnologias-tecs">
                        <p className="tecnologias-paragrafo">   <FaJava style={{ color: "#FFF  " }} />    <span className="tecnologias-p-span">Java</span></p>
                        <p className="tecnologias-paragrafo">   <SiSpringboot style={{ color: "#5cdc94  " }} /><span className="tecnologias-p-span">   Springboot</span></p>

                    </div>
                </div>
                <div className="tecnologias-especialidade">
                    <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>Outros</h3>
                    <div className="tecnologias-tecs">
                        <p className="tecnologias-paragrafo"><FaDocker style={{ color: "#0db7ed " }} />    <span className="tecnologias-p-span">Docker</span></p>
                        <p className="tecnologias-paragrafo"><AiFillGithub />   <span className="tecnologias-p-span">Git</span></p>
                                  
                    </div>
                    
                </div>
            </div>
        </>
            );
}

            export default Tecnologias;