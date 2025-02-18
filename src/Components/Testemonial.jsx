import { AiFillStar } from 'react-icons/ai';
import ProfilePic from '../assets/john-doe-image.png'

export default function Testemonial() {
    return (
        <>
            <p className="primary-subheading" id="testemonial">Avaliação</p>
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <h1 className="primary-heading">O que dizem sobre nós</h1>
                    <p className="primary-text">
                        Nosso clientes adoram a qualidade e o sabor dos nossos donuts. Cada mordida é uma explosão de sabor de traz alegria e satisfação. Estamos sempre recebendo elogios pela variedade desabores que oferecemos.
                    </p>
                </div>
                <div className="testeminial-section-bottom">
                    <img src={ProfilePic} alt="imagem do avaliador" />
                    <p>
                        Descobri essa loja de donuts foi uma das melhores coisas que acotenceu! os donuts são sempre frescos, macios e incrivelmente saborosos. O atendimento é excelente, e a entrega é sempre pontual. Recomento para todos que querem uma experiência deliciosa e memorável.
                    </p>
                    
                <div className="testeminials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>

                <h2>João Guilherme</h2>
                </div>
                

            </div>
        </>
    );
}
