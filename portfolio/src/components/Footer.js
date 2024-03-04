import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: kripamr3@gmail.com</p>
                <p className="footer-contact-access">Mobile: +91 9497047048</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100010176464829"><i><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/kripa_aa/"><i><FaInstagram /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;