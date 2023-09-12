import React, { Component } from 'react'
import NextAndPrevious from '../../common/np-page/NextAndPrevious'
import SocialMediaIcons from '../../common/sm-icons/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import SkillPercent from './center/SkillPercent'
import './Skills.css'
import TechnoList from './right/TechnoList'

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

class Skills extends Component {

    state = {
        skills: {
            frontend: { title: 'Frontend', percent: 70, color: '#3ad531' },
            backend: { title: 'Backend', percent: 80, color: '#ff4539' },
            database: { title: 'Base de données', percent: 60, color: '#1d252c' },
            webTech: [
                { id: 1, name: 'React JS', logo: 'LOGO', name_color: 'red', bg: 'yellow' },
                { id: 2, name: 'Angular', logo: 'LOGO', name_color: 'red', bg: 'yellow' },
                { id: 3, name: 'Node JS', logo: 'LOGO', name_color: 'red', bg: 'yellow' },
                { id: 4, name: 'Next JS', logo: 'LOGO', name_color: 'red', bg: 'yellow' },
                { id: 5, name: 'Vue JS', logo: 'LOGO', name_color: 'red', bg: 'yellow' },
            ]
        }
    }
    
    render() {
        const { skills } = this.state
        const { transitionPageVariants, rightContentVariants } = this.props
        return (
            <>
                <motion.div 
                    className="center-content"
                    variants={transitionPageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Typography variant="h3">Compétences</Typography>
                    <div className="center-body">
                        <motion.p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Inventore aliquam officiis delectus perferendis optio, quod autem 
                            incidunt explicabo pariatur, provident quam beatae. Cumque amet reiciendis, 
                            sit eum dolor necessitatibus quia.
                        </motion.p>
                        <motion.div className="skills-percent" variants={textVariants}>
                            <SkillPercent skills={skills.frontend} />
                            <SkillPercent skills={skills.backend} />
                            <SkillPercent skills={skills.database} />
                        </motion.div>
                    </div>             
                    <NextAndPrevious 
                        previous={{ page: 'A propos', pathname: '/home' }}
                        next={{ page: 'Projets', pathname: '/works' }}
                    />
                </motion.div>
                <div className="right-content">
                    <motion.div
                        className="right-body"
                        variants={rightContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <TechnoList
                            webTech={skills.webTech}
                        />
                    </motion.div>
                    <SocialMediaIcons />
                </div>
            </>
        )
    }
}

export default Skills
