import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home" className="nav-item active">Home</a>
                <a href="#about" className="nav-item">About</a>
                <a href="#projects" className="nav-item">Projects</a>
                <a href="#service" className="nav-item">Service</a>
                <a href="#contact" className="nav-item">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;