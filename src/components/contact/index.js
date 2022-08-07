import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const refForm = useRef();
    const sendEmail = (e) =>
    {
         e.preventDefault();

         emailjs.sendForm('service_g8i5zzg', 'template_yns41qn', e.target,'HLteH_BmL34rdI6gP')
                    .then(function() {
                        alert('Message sent');
                    }, function(error) {
                        console.log('Message not sent...', error);
                    });
    }

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
              <h1>Contact me,</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </p>
              <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder='Subject'/>
                        </li>
                        <li>
                            <textarea name="message" placeholder='Message....'></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="send"/>
                        </li>
                    </ul>
                </form>
              </div>
            </div>
        </div>
    )
}

export default Contact