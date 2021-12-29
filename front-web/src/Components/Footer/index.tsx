import './styles.css';
import { ReactComponent as InstagramImg } from './instagram.svg';
import { ReactComponent as YouTubeImg } from './youtube.svg';
import { ReactComponent as LinkedinImg } from './linkedin.svg'


const Footer = () => {
    return (
        <footer className="main-footer">
            <p>App desenvolvido durante a 2ª ed.
                do evento Semana DevSuperior</p>
            <div className='footer-icons'>
                <a href="https:\\www.google.com">
                    <YouTubeImg />
                </a>
                <a href="https:\\www.google.com">
                    <LinkedinImg />
                </a>
                <a href="https:\\www.google.com">
                    <InstagramImg />
                </a>
            </div>
        </footer>
    );
}

export default Footer;