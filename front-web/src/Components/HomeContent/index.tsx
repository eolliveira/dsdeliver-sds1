import './styles.css';
import { ReactComponent as HomeImg } from './main.svg';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
            <div className='home-container'>
                <div className='home-content'>
                    <div className='home-actions'>
                        <h1 className='home-title'>Faça seu pedido <br />
                            que entregamos<br />
                            pra você!!!
                        </h1>
                        <p className='home-subtitle'>Escolha o seu pedido e em poucos minutos
                            levaremos na sua porta
                        </p>
                        <Link className="btn-order" to='/orders' type="button">FAZER PEDIDO</Link>
                    </div>
                    <div className='home-image'>
                        <HomeImg />
                    </div>
                </div>
            </div>
    );
}

export default HomeContent;