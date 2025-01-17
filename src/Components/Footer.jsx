import { BsTwitterX, BsYoutube } from "react-icons/bs";
import Logo from "../assets/Logo.svg"
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
    return (
        <>
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="footer-icons">
                    <BsTwitterX/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <FaFacebookF />
                </div>
            </div>

            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Qualidade</span>
                    <span>Ajuda</span>
                    <span>Nossa Marca</span>
                    <span>Carreira</span>
                    <span>Avaliação</span>
                    <span>Nosso trabalho</span>
                </div>

                <div className="footer-section-columns">
                    <span>+55 4002-8922</span>
                    <span>seuemail@hotmail.com</span>
                    <span>outroemail@hotmail.com</span>
                    <span>emailcontato@hotmail.com</span>
                </div>

                <div className="footer-section-columns">
                    <span>Termos & Condições</span>
                    <span>Políticas de Privacidade</span>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
        </>
    );
}