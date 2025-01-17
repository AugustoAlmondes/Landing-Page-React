// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHouseFloodWater, faUtenssils, faTruck} from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHouseFloodWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Work() {

    const workInfoData = [
        {
            // image: <FontAwesomeIcon icon={faHouseFloodWater} />,
            image: <FontAwesomeIcon icon={faHouseFloodWater} />,
            title: "Feito como se fosse em casa",
            text: "Todos os nossos donuts são preparados com carinho e atenção aos detalhes, como se fossem feitos feitos na cozinha da sua casa. Utilizamos receitas tradicionais e técnicas artesanais para criar donuts frescos e saborosos, que lembram os melhores momnetos em familia.",
        },
        {
            image: <FontAwesomeIcon icon={faUtensils} />,
            title: "Ingredientes selecionados.",
            text: "Nossos donuts saborosos e irresistíveis são feitos com ingredientes selecionados cuidadosamente, garantindo uma explosão de sabores únicos e irresistíveis.Com uma combinação perfeita de texturas e sabores, nossos donuts são uma verdadeira delícia para os sentidos.",
        },
        {
            image: <FontAwesomeIcon icon={faTruck} />,
            title: "Entrega em toda a cidade.",
            text: "Nossa entrega e uma experiencia unica e saborosa, feita com carinho e atencao aos detalhes, garantindo que seus donuts cheguem frescos e saborosos para voce em qualquer parte da cidade, para que você possa desfrutar de nossos deliciosos donuts em qualquer momento. e onde quer que esteja.",
        }
    ]

    return (
        <>
            <p className="primary-subheading" id="work">Nosso Trabalho</p>
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <h1>Como Servimos Você</h1>
                    <p>
                        Nossa missão é proporcionar a você uma experiência única e deliciosa.
                        Desde a seleção cuidadosa dos ingredientes até a sua entrega no seu endereço, cada etapa do nosso processo é pensada
                        para garantir que você receba os melhores donuts da cidade. Estamos comprometidos com a qualidade e a satisfação de nossos clientes.
                    </p>
                </div>

                <div className="work-section-bottom">
                    {
                        workInfoData.map((data) => (
                            <div className="work-section-info" key={data.title}>
                                <div className="info-boxes-img-container">{data.image}</div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}