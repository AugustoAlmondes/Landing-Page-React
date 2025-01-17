import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from "../assets/about-background1.jpg"
import AboutBackgroundImage from "../assets/about-image.png"

export default function About() {
    return (
        <>
        <div className="primary-subheading" id="about">
            Sobre Nós
        </div>
            <div className="about-section-container">
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="imagem de fundo" />
                </div>

                <div className="about-section-image-container">
                    <img src={AboutBackgroundImage} alt=" imagem" />
                </div>


                <div className="about-section-text-container">
                    <h1 className="primary-heading">
                        É Importante Conhecer Com Quem Se Alimenta
                    </h1>

                    <p className="primary-text">
                        Somos uma doceria local dedicada a trazer a você
                        os donuts mais deliciosos da cidade.
                    </p>

                    <p className="primary-text">
                        Nossa história começou com uma paixão e
                        desejo de criar um espaço onde amigos e
                        familiares possam se reunir e desfrutar de
                        momentos doces juntos.
                    </p>

                    <div className="about-buttons-container">
                        <button className="secondary-button">
                            Saiba Mais
                        </button>

                        <button className="watch-video-button">
                            <BsFillPlayCircleFill />
                            Assista Nosso Vídeo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}