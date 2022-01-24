import { useState } from 'react';
import './styles.css'

const Contact = () => {

    const [status, setStatus] = useState('');

    function submitForm(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className='uil uil-whatsapp contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Text me</h3>
                            <span className="contact__subtitle">86 99504-2836</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className='uil uil-envelope contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">giselesousar@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className='uil uil-map-marker contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Brazil - Teresina</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={submitForm} action="https://formspree.io/mnqgnjjy" method="POST" className="contact__from grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input name="name" type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" name="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Message</label>
                        <textarea name="message" id="" cols={0} rows={7} className="contact__input"></textarea>
                    </div>
                    <div>
                    {status === "SUCCESS" ? <p>Obrigada!</p> : 
                        <button type='submit' className="button button-flex">
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    }
                    {status === "ERROR" && <p>Ooops! Ocorrou um erro.</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;