import {FaJs, FaTwitter, FaReact} from "react-icons/fa";

function Skills() {
    const skillsArr = [{name: "React.js", icon:FaReact}, {name: "Typescript", icon:FaTwitter}, {name: "Javascript", icon:FaJs}];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
            {
                skillsArr.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <i key={index} className='skill-cards'>
                        <Icon className='skill-icon'/>
                        <p className='skill'>{skill.name}</p>
                        </i>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Skills;