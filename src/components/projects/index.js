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
                        <h2>Project title</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                        <button>
                            <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#02c43"/> Visit
                            </a>
                        </button>
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                        <button>
                            <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#02c43"/> Visit
                            </a>
                        </button>
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                        <button>
                            <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#02c43"/> Visit
                            </a>
                        </button>
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                        <button>
                            <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#02c43"/> Visit
                            </a>
                        </button>
                    </div>                  
                </div>
                <div className='project'>
                    <img src={ecommerce_log} alt="not found"/>  
                    <div className='tet-zone'>
                        <h2>Project title</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                        <button>
                            <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#02c43"/> Visit
                            </a>
                        </button>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Projects