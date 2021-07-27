import React, { Component } from 'react'
import NextAndPrevious from '../../common/np-page/NextAndPrevious'
import SocialMediaIcons from '../../common/sm-icons/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import './Skills.css'

class Skills extends Component {
    render() {
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
                        <Typography vairant="h4">
                            I'm the right content for Skills
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed iusto sint, 
                            doloremque distinctio asperiores eos. Voluptates laudantium ab consectetur beatae. 
                            Alias quos est omnis libero pariatur quo autem odit voluptatibus!
                        </Typography>
                    </motion.div>
                    <SocialMediaIcons />
                </div>
            </>
        )
    }
}

export default Skills
