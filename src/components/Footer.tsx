import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <h2 className="footer-logo">Duong</h2>
            <div className="footer-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#service">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-socials">
                <span>Github</span> • <span>LinkedIn</span> • <span>Instagram</span>
            </div>
            <p className="copyright">© 2025 Duong. All rights reserved.</p>
        </footer>
    );
};

export default Footer;