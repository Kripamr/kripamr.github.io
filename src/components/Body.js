import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/Kripa-Avatar.jpeg';
// import GifAvatar from '../assets/Avatar.gif';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Kripa M R</div>
                        <div className="body-text">Senior Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;