import './index.scss'
import ecommerce_log  from '../../assets/images/ecommerce.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    return (
        <div className="container projects-page">
            <h1>My pojects</h1>
            <div class="projects">
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title
                        <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="#093685"/>
                    </a>
                        </h2>
                        
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title
                        <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="#093685"/>
                    </a>
                        </h2>
                        
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title
                        <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="#093685"/>
                    </a>
                        </h2>
                        
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title
                        <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="#093685"/>
                    </a>
                        </h2>
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title
                        <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/mnogot098">
                        
                        <FontAwesomeIcon icon={faGithub} color="#093685"/>
                    </a>
                        </h2>
                        
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Projects