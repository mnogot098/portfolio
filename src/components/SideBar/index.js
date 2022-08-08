import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import Logos from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="white"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="white"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="white"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/mohamed-ng/">

                        <FontAwesomeIcon icon={faLinkedin} color="white"/>
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="white"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;