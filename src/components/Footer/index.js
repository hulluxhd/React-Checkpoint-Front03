import "./style.css"
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { FaWhatsappSquare } from "react-icons/fa"
function Footer() {
    return (
        <div style={{}} id="Contato">
            <div className="footer-container">
                <div className="footer-contato">
                    <p id="contatos-paragrafo">Contatos</p>
                    <a href="https://www.linkedin.com/in/denny-ribeiro/"><AiFillLinkedin className="icons" /></a>
                    <a href="+5585981385830"><p className="footer-contatos"><FaWhatsappSquare className="icons" /> (85) 98138-5830</p></a>
                    <a href="denny.ribeiro@outlook.com"><p className="footer-contatos"><AiOutlineMail className="icons" /><span> denny.ribeiro@outlook.com</span></p></a>
                </div>
                <div className="footer-desc">
                    <p>Desenvolvido em React por Denny Ribeiro</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;