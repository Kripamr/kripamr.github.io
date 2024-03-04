import IMG from '../assets/Detective.png';

function About() {
     return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Senior Software Engineer with 4+ years of experience in developing robust and well maintainable
                    software products in Finance and Retail domain, who takes extra care in increasing user experience
                    through developing a seamless UI. Ability to coordinate and collaborate with large teams to process and
                    maintain big projects without compromising service or quality.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;