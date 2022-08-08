import './index.scss'
import logo from '../../assets/images/test-removebg-preview.png'
import java from '../../assets/images/java.png'
import php from '../../assets/images/php_PNG36-removebg-preview.png'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>About me,</h1>
                <p>
                My name is Mohamed NOGOT, from Morocco
I'm a full-stack developer experienced with Laravel, java and ReactJs, but I'm always exploring other technologies and frameworks that catch my attention! A quick learner 
who can absorb new ideas and can communicate clearly and effectively,<br/>
If you are looking for a developer to strengthen your team, I would love to hear from you!
                </p>
            </div>
            <div className='logos'>
                <img src={logo}/>
                <img src={java}/>
                <img src={php}/>
            </div>
        </div>
    )
}

export default About