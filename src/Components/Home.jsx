import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import { FiArrowDownRight } from "react-icons/fi";

// import {ScrollTo} from "../service/scroll.js"

export default function Home() {
    return (
        <>
        <div className="home-container" id="home">
            <Navbar />

            <div className="home-banner-container">
                <div className="banner-image">
                    <img src={BannerBackground} alt="imagem banner"/>
                </div>

                <div className="banner-text">
                    <h1 className="primary-heading">
                        Seu Donut Favorito Entregue Em Sua Casa!!
                    </h1>

                    <p className="primary-text">
                        Diversos sabores deliciosos para adocar seus melhores momentos. Peça já o seu e receba um mimo surpresa.
                    </p>

                    <button className="secondary-button" >
                        Faça seu pedido <FiArrowDownRight />
                    </button>

                    <p className="primary-text">
                        Ou venha comer conosco em um ambiente climatizado e aconchegante com várias opções para seu pedido.
                    </p>
                </div>

                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt="Donuts"/>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}