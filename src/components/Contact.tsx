import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-container">
            <div className="section-header">
                <h2 className="section-title">Get in Touch with Us</h2>
            </div>

            <div className="contact-wrapper">
                {/* Contact Info */}
                <div className="contact-info">
                    <p>I'm always open to discuss your projects and talk about new opportunities. Let's build something great.</p>

                    <div className="contact-detail">
                        <div className="c-icon blue-bg">✉</div>
                        <span>nhduong141103@gmail.com</span>
                    </div>
                    <div className="contact-detail">
                        <div className="c-icon blue-bg">📞</div>
                        <span>+84 946092468</span>
                    </div>
                    <div className="contact-detail">
                        <div className="c-icon blue-bg">📍</div>
                        <span>Hanoi, Vietnam</span>
                    </div>

                    <div className="contact-socials">
                        <span className="social-circle">Github</span>
                        <span className="social-circle">Ln</span>
                        <span className="social-circle">X</span>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Your Email</label>
                        <input type="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea rows={4} placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="btn btn-blue-block">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;