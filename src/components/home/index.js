import './index.scss';
import { Link } from 'react-router-dom';
const Home = () =>
{
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br/> I'm Mohamed NOGOT</h1>
                <h1>Web developer</h1>
                <h2>FULL-STACK DEVELOPER  |  JAVA  |  PHP-LARAVEL  |  JAVASCRIPT</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;