import "./style.css"
import { projects } from "../../assets/data"
import Card from "../Card"

function Projects() {
    return (

        <div className="projects">
            <h3 style={{ display: "block", fontSize: "2rem", margin: "70px auto"}}>Projetos</h3>
            <Card projetos={projects} style={{marginTop: "60px"}}/>
        </div>
    );
}

export default Projects;