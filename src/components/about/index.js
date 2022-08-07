import './index.scss'
import logo from '../../assets/images/test-removebg-preview.png'
import java from '../../assets/images/java.png'
import php from '../../assets/images/php_PNG36-removebg-preview.png'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>About me,</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only </p>
                <p>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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