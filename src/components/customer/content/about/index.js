import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import NextAndPrevious from '../../common/np-page/NextAndPrevious'
import SocialMediaIcons from '../../common/sm-icons/SocialMediaIcons'
import './About.css'

class About extends Component {
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
                    <Typography variant="h3" className="title">Bonjour !</Typography>                
                    <Typography variant="h4" className="subtitle">Je suis <span>Dev</span></Typography>
                    <div className="center-body">
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                            temporibus, minima sint nihil vero quis saepe a! Aliquid culpa asperiores nemo? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                            temporibus, minima sint nihil vero quis saepe a! Aliquid culpa asperiores nemo?
                        </Typography>
                        <Typography variant="body2" className="pd-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                            temporibus, minima sint nihil vero quis saepe a! Aliquid culpa asperiores nemo? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                        </Typography>
                    </div>
                    <NextAndPrevious next={{ page: 'Compétences', pathname: '/skills' }} />
                </motion.div>
                <div className="right-content">
                    <motion.div
                        className="right-body"
                        variants={rightContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Typography vairant="h4">I'm the right content</Typography>
                    </motion.div>
                    <SocialMediaIcons />
                </div>
            </>
        )
    }
}

export default About
