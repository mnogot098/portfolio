import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
       <div className='App'>
       <SideBar/>
       <div className='page'>
       <header>
                <NavLink exact="true" activeclassname="active" to="/about">
                    About
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/contact">
                    Contact
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/projects">
                    Projects
                </NavLink>
            </header>

        <Outlet/>

        <span className='tags bottom-tags'>
            &lt;body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;body&gt;</span>
        </span>

       </div>
       </div>
    )
}

export default Layout;